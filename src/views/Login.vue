<template>
  <div class="mx-auto" style="width: 400px">
    <div class="mx-auto" style="width: 40px">
      <img
        class="mx-auto mt-5"
        width="40px"
        src="https://i.postimg.cc/Dfp23k8g/logo-2x.png"
        alt="LogoImage"
      />
    </div>
    <h3 class="title text-center font-weight-bold mt-4">登入 Alphitter</h3>

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
            :class="{ redBottomLine: errorMsg === '此帳號不存在!' }"
            placeholder="請輸入帳號"
            required
            autofocus
          />
          <div class="error-alert">
            <span v-if="errorMsg === '此帳號不存在!'">帳號不存在</span>
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
            :class="{ redBottomLine: errorMsg === '密碼錯誤!' }"
            placeholder="請輸入密碼"
            autocomplete="current-password"
            required
          />
          <div class="error-alert">
            <span v-if="errorMsg === '密碼錯誤!'">密碼錯誤</span>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="btn btn-info btn-singin"
          :disabled="isProcessing"
        >
          {{ isProcessing ? "驗證中" : "登入" }}
        </button>
      </div>
    </form>
    <div class="d-flex mt-4 justify-content-end">
      <router-link class="mx-1" to="/signup"> 註冊 </router-link>
      <span>・</span>
      <router-link class="mx-1" to="/admin"> 後台登入 </router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization";

export default {
  name: "LogIn",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
      errorMsg: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 重新設定錯誤訊息
        this.errorMsg = "";

        // 表單驗證失敗：攔截惡意拿掉帳密 required 屬性而送出表單的狀況
        if (!this.account || !this.password) {
          // STEP1. 如果 email 或 password 為空，則使用 Toast 提示
          Toast.fire({
            icon: "warning",
            title: "帳號和密碼為必填",
          });
          // STEP2. 然後 return 不繼續往後執行
          return;
        }

        // 表單驗證成功：帳密皆有填寫
        // STEP1. 讓登入按鈕失效
        this.isProcessing = true;

        // STEP2. 將帳密透過 API 送回伺服器驗證，並取得回傳的資料
        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });

        // STEP3-1. 帳密驗證若失敗，API 回傳錯誤
        if (data.status === "error") {
          throw new Error(data.message);
        }

        // STEP3-2. 帳密驗證若成功
        // 將 token 存在 localStorage 裡
        localStorage.setItem("token", data.data.token);

        // 把 API 回傳的目前使用者資料存進 Vuex 裡
        this.$store.commit("setCurrentUser", data.data.user);

        // 登入成功, 直接轉址到首頁 （不需還原 isProcessing 的狀態）
        this.$router.push("/main");

        // 登入失敗
      } catch (error) {
        // 帳號或密碼輸入錯誤後，將密碼欄位清空
        this.password = "";

        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing = false;

        // 錯誤通知處理
        console.error(error.message);
        this.errorMsg = error.message;
        if (error.message === "此帳號不存在!") {
          Toast.fire({
            icon: "error",
            title: "帳號不存在，請重新確認",
          });
        } else if (error.message === "密碼錯誤!") {
          Toast.fire({
            icon: "error",
            title: "密碼錯誤，請重新輸入",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "目前無法登入，請稍後再試",
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