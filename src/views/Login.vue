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
    <h3 class="text-center font-weight-bold mt-4">登入 Alphitter</h3>

    <form @submit.prevent.stop="handleSubmit">
      <div class="form-wrapper mt-5">
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
        <label for="password">密碼</label>
        <div>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="form"
            placeholder="請輸入密碼"
            autocomplete="current-password"
            required
          />
        </div>
      </div>

      <div class="mt-4">
        <button type="submit" class="btn btn-info btn-singin">登入</button>
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
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        JSON.stringify({
          account: this.account,
          password: this.password,
        })
      );
    },
  },
};
</script>


<style lang="scss">
@import "../assets/scss/login.scss";
</style>