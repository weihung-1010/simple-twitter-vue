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
                    placeholder="請輸入帳號"
                    required
                    autofocus
                  />
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
                    placeholder="請輸入使用者名稱"
                    required
                    autofocus
                  />
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
                    placeholder="請輸入 Email"
                    required
                    autofocus
                  />
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

              <div class="form-wrapper mt-2">
                <label for="checkPassword">密碼確認</label>
                <div>
                  <input
                    id="checkPassword"
                    v-model="checkPassword"
                    name="checkPassword"
                    type="password"
                    class="form"
                    placeholder="請再次輸入密碼"
                    required
                  />
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
    async handleSubmit(e) {
      try {
        this.errorMsg = "";
        if (
          !this.account.trim() ||
          !this.email.trim() ||
          !this.name.trim() ||
          !this.password.trim() ||
          !this.checkPassword.trim()
        ) {
          Toast.fire({
            icon: "warning",
            title: "請輸入所有欄位，如不更新密碼，請輸入舊密碼",
          });
          return;
        } else if (this.password !== this.checkPassword) {
          this.password = "";
          this.checkPassword = "";
          Toast.fire({
            icon: "warning",
            title: "兩次密碼輸入不同",
          });
          return;
        } else if (this.name.length > 50) {
          Toast.fire({
            icon: "warning",
            title: "暱稱不可超過50字",
          });
          return;
        }
        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);

        const response = await userAPI.update({
          userId: this.id,
          formData,
        });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "更新帳戶資料成功",
        });

        // 更新成功, 清空密碼
        this.password = "";
        this.checkPassword = "";
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.error(error.message);
        if (error.message === "The email is registered.") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "Email已重複註冊！",
          });
        } else if (error.message === "The account is registered.") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "account已重複註冊！",
          });
        } else if (error.message === "Name is too long.") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "暱稱不可超過50字",
          });
        } else if (
          error.message === "Password and checkPassword are not same."
        ) {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "兩次密碼輸入不相符",
          });
        } else if (error.message === "Invalid email address.") {
          this.errorMsg = error.message;
          Toast.fire({
            icon: "error",
            title: "Email格式錯誤，請填入有效的Email地址",
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
  width: 589px;
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