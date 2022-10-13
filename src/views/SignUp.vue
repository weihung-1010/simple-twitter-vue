<template>
  <div class="mx-auto" style="width: 400px">
    <div class="mx-auto" style="width: 40px">
      <img
        class="mx-auto mt-4"
        width="40px"
        src="https://i.postimg.cc/Dfp23k8g/logo-2x.png"
        alt="LogoImage"
      />
    </div>
    <h3 class="title text-center font-weight-bold mt-4">建立你的帳號</h3>

    <form @submit.prevent.stop="handleSubmit">
      <div class="form-wrapper">
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
            <span v-if="errorMsg === '此帳號已註冊過！'">帳號已重複註冊</span>
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

      <div class="form-wrapper">
        <label for="name">名稱</label>
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

      <div class="form-wrapper">
        <label for="email">Email</label>
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
          />
          <div class="error-alert">
            <span v-if="errorMsg === '此信箱已註冊過！'">信箱已重複註冊</span>
          </div>
          <div class="error-alert">
            <span v-if="errorMsg === '請輸入正確信箱地址'">信箱格式錯誤</span>
          </div>
        </div>
      </div>

      <div class="form-wrapper">
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

      <div class="form-wrapper">
        <label for="checkPassword">密碼確認</label>
        <div>
          <input
            id="checkPassword"
            v-model="checkPassword"
            name="checkPassword"
            type="password"
            class="form"
            :class="{ redBottomLine: errorMsg === '密碼與確認密碼不相符' }"
            placeholder="請再次輸入密碼"
            required
          />
          <div class="error-alert">
            <span v-if="errorMsg === '密碼與確認密碼不相符'">密碼不一致</span>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="btn btn-info btn-singin"
          :disabled="isProcessing"
        >
          {{ isProcessing ? "註冊中" : "註冊" }}
        </button>
      </div>
    </form>

    <div class="d-flex mt-4 justify-content-center">
      <router-link class="mx-1" to="/login"> 取消 </router-link>
    </div>
  </div>
</template>


<script>
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization";

export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
      errorMsg: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 重新設定錯誤訊息
        this.errorMsg = "";

        // 表單驗證失敗
        // STEP1. 攔截惡意拿掉帳密 required 屬性而送出表單的狀況
        if (
          !this.account.trim() ||
          !this.name.trim() ||
          !this.email.trim() ||
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

        // STEP2. 將註冊資料透過 API 送回伺服器新增，並取得回傳的資料
        const { data } = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });

        // 註冊資料若失敗，API 回傳錯誤
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 註冊成功, 跳出通知並直接轉址到登入頁面（不需還原 isProcessing 的狀態）
        Toast.fire({
          icon: "success",
          title: "註冊成功！",
        });
        this.$router.push("/login");

        // 註冊失敗
      } catch (error) {
        // 因為註冊失敗，所以要把按鈕狀態還原
        this.isProcessing = false;

        // 錯誤通知處理
        console.error(error.message);
        this.errorMsg = error.message;
        if (error.message === "此帳號已註冊過！") {
          Toast.fire({
            icon: "error",
            title: "請改用其他帳號註冊",
          });
        } else if (error.message === "此信箱已註冊過！") {
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
          Toast.fire({
            icon: "error",
            title: "註冊失敗，請重新嘗試",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/login.scss";
</style>