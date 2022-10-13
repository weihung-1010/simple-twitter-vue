<template>
  <div class="container">
    <div class="row">
      <!-- Navbar -->
      <div class="col-2">
        <Navbar />
      </div>
      <!-- setting -->
      <div class="col">
        <div class="user-section">
          <div class="title">
            <h4 class="ml-4 pt-4">帳戶設定</h4>
          </div>
          <div class="content">
            <form class="pl-4 pr-4" @submit.prevent.stop="handleSubmit">
              <div class="form-wrapper mt-4">
                <label for="account">帳號</label>
                <div>
                  <input
                    id="account"
                    v-model="account"
                    name="account"
                    type="text"
                    class="form"
                    :class="{ redBottomLine: errorMsg === '此帳號已註冊過！' }"
                    placeholder="請輸入帳號"
                    required
                    autofocus
                  />
                  <div class="error-alert">
                    <span v-if="errorMsg === '此帳號已註冊過！'"
                      >帳號已重複註冊</span
                    >
                  </div>
                  <div class="alert-container">
                    <span class="error-alert" v-if="account.length > 15"
                      >字數超過上限</span
                    >
                    <span class="letter-count" v-if="account.length > 0"
                      >{{ account.length }}/15</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-wrapper mt-4">
                <label for="account">名稱</label>
                <div>
                  <input
                    id="name"
                    v-model="name"
                    name="name"
                    type="text"
                    class="form"
                    :class="{ redBottomLine: name.length > 50 }"
                    placeholder="請輸入使用者名稱"
                    required
                    autofocus
                  />
                  <div class="alert-container">
                    <span class="error-alert" v-if="name.length > 50"
                      >字數超過上限</span
                    >
                    <span class="letter-count" v-if="name.length > 0"
                      >{{ name.length }}/50</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-wrapper mt-4">
                <label for="account">Email</label>
                <div>
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    type="email"
                    class="form"
                    :class="{
                      redBottomLine:
                        errorMsg === '此信箱已註冊過！' ||
                        errorMsg === '請輸入正確信箱地址',
                    }"
                    placeholder="請輸入 Email"
                    required
                    autofocus
                  />
                  <div class="error-alert">
                    <span v-if="errorMsg === '此信箱已註冊過！'"
                      >信箱已重複註冊</span
                    >
                  </div>
                  <div class="error-alert">
                    <span v-if="errorMsg === '請輸入正確信箱地址'"
                      >信箱格式錯誤</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-wrapper mt-4">
                <label for="password">密碼</label>
                <div>
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    class="form"
                    placeholder="請輸入密碼"
                    required
                  />
                </div>
              </div>

              <div class="form-wrapper mt-4">
                <label for="checkPassword">密碼確認</label>
                <div>
                  <input
                    id="checkPassword"
                    v-model="checkPassword"
                    name="checkPassword"
                    type="password"
                    class="form"
                    :class="{
                      redBottomLine: errorMsg === '密碼與確認密碼不相符',
                    }"
                    placeholder="請再次輸入密碼"
                    required
                  />
                  <div class="error-alert">
                    <span v-if="errorMsg === '密碼與確認密碼不相符'"
                      >密碼不一致</span
                    >
                  </div>
                </div>
              </div>

              <div class="mt-4 d-flex justify-content-end">
                <button type="submit" class="btn" :disabled="isProcessing">
                  {{ isProcessing ? "更新中" : "儲存" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import userAPI from "./../apis/user";
import Navbar from "../components/Navbar.vue";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Setting",
  components: {
    Navbar,
  },
  data() {
    return {
      // 先預設使用者的帳號設定資料
      id: -1,
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
      errorMsg: "",
    };
  },
  computed: {
    // 取得並載入 Vuex state 中的 currentUser 資料
    ...mapState(["currentUser"]),
  },
  watch: {
    // 用 watch 來監控 currentUser 有無變化
    currentUser(newValue) {
      this.currentUser = {
        ...this.currentUser,
        ...newValue,
      };
      // 再把新的的資料更新到這個頁面中
      (this.account = this.currentUser.account),
        (this.name = this.currentUser.name),
        (this.email = this.currentUser.email),
        (this.id = this.currentUser.id);
    },
  },
  created() {
    // 當 created 時 將 currentUser 的資料帶入
    this.fetchAccountData();
  },
  methods: {
    // 把資料的預設值替換為 currentUser 的資料
    fetchAccountData() {
      (this.account = this.currentUser.account),
        (this.name = this.currentUser.name),
        (this.email = this.currentUser.email),
        (this.id = this.currentUser.id);
    },
    // 送出表單
    async handleSubmit(formData) {
      try {
        // 重新設定錯誤訊息
        this.errorMsg = "";

        // 表單驗證失敗
        // STEP1. 攔截惡意拿掉帳密 required 屬性而送出表單的狀況
        if (
          !this.account.trim() ||
          !this.email.trim() ||
          !this.name.trim() ||
          !this.password.trim() ||
          !this.checkPassword.trim()
        ) {
          Toast.fire({
            icon: "warning",
            title: "請輸入所有的欄位",
          });
          return;

          // STEP2. 在回傳伺服器前先檢查帳號字數
        } else if (this.account.length > 15) {
          Toast.fire({
            icon: "warning",
            title: "帳號不可超過 15 字",
          });
          return;

          // STEP3. 在回傳伺服器前先檢查名稱字數
        } else if (this.name.length > 50) {
          Toast.fire({
            icon: "warning",
            title: "名稱不可超過 50 字",
          });
          return;

          // STEP4. 在回傳伺服器前先檢查兩次密碼輸入的長度是否一致
        } else if (this.password.length !== this.checkPassword.length) {
          this.checkPassword = "";
          this.errorMsg = "密碼與確認密碼不相符";
          Toast.fire({
            icon: "warning",
            title: "兩次密碼輸入不同",
          });
          return;
        }

        // 表單驗證成功：全部欄位皆有填寫
        // STEP1. 讓註冊按鈕失效
        this.isProcessing = true;

        // 待刪除
        // const submitData = JSON.stringify({
        //   account: this.account,
        //   name: this.name,
        //   email: this.email,
        //   password: this.password,
        //   checkPassword: this.checkPassword,
        // });

        // 待刪除
        // const form = e.target;
        // const formData = new FormData(form);
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ":" + value);
        // }
        // console.log("formData.entries is:", formData.entries());
        // const a = formData.entries();

        // STEP2. 將註冊資料透過 API 送回伺服器新增，並取得回傳的資料
        const { data } = await userAPI.update({
          userId: this.id,
          formData,
        });

        console.log("data is:", data); //待刪除

        // 更新資料若失敗，API 回傳錯誤
        if (data.status === "error") {
          throw new Error(data.message);
        }

        // 成功更新資料
        Toast.fire({
          icon: "success",
          title: "成功更新帳戶資料",
        });

        // 更新後將密碼欄位清空
        this.password = "";
        this.checkPassword = "";

        // 還原按鈕狀態
        this.isProcessing = false;

        // 更新失敗
      } catch (error) {
        // 因為更新失敗，所以要把按鈕狀態還原
        this.isProcessing = false;

        // 錯誤通知處理
        console.error(error.message);
        if (error.message === "此帳號已註冊過！") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "請改用其他帳號註冊",
          });
        } else if (error.message === "此信箱已註冊過！") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "請改用其他 Email 註冊",
          });
        } else if (error.message === "請輸入正確信箱地址") {
          Toast.fire({
            icon: "error",
            title: "請輸入正確的信箱格式",
          });
        } else if (error.message === "密碼與確認密碼不相符") {
          this.checkPassword = "";
          Toast.fire({
            icon: "error",
            title: "兩次密碼輸入不同",
          });
        } else {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "資料更新失敗",
          });
        }
      }
    },
  },
};
</script>


<style scoped>
@import "../assets/scss/login.scss";
.user-section {
  outline: 1px solid #e6ecf0;
  width: 639px;
  height: 1200px;
}
.title {
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 24px;
}
.form-wrapper {
  width: 593px;
  height: 54px;
}
.btn {
  background: #ff6600;
  border-radius: 50px;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  padding: 8px 24px;
}
</style>