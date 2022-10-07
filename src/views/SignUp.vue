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
    <h3 class="text-center font-weight-bold mt-4">建立你的帳號</h3>

    <form @submit.prevent.stop="handleSubmit">
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
        <label for="name">名稱</label>
        <div>
          <input
            id="name"
            v-model="name"
            name="name"
            type="text"
            class="form"
            placeholder="請輸入使用者名稱"
            required
          />
        </div>
      </div>

      <div class="form-wrapper mt-4">
        <label for="email">Email</label>
        <div>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            class="form"
            placeholder="請輸入 Email"
            required
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

      <div class="form-wrapper mt-4">
        <label for="checkPassword">密碼確認</label>
        <div>
          <input
            id="passwordCheck"
            v-model="passwordCheck"
            name="passwordCheck"
            type="password"
            class="form"
            placeholder="請再次輸入密碼"
            required
          />
        </div>
      </div>

      <div class="mt-4">
        <button type="submit" class="btn btn-info btn-singin">註冊</button>
      </div>
    </form>

    <div class="d-flex mt-4 justify-content-center">
      <router-link class="mx-1" to="/login"> 取消 </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.passeord,
        passwordCheck: this.passwordCheck,
      };
      console.log(JSON.stringify(data));
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/login.scss";
</style>