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
          <div class="content pt-4">
            <form class="pl-4 pr-4">
              <div class="form-wrapper mt-4">
                <label for="account">帳號</label>
                <div>
                  <input
                    id="account"
                    name="account"
                    type="text"
                    class="form"
                    placeholder="請輸入帳號"
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-wrapper mt-2">
                <label for="account">名稱</label>
                <div>
                  <input
                    id="name"
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
                    name="password"
                    type="password"
                    class="form"
                    placeholder="請輸入密碼"
                    required
                  />
                </div>
              </div>
              <div class="error-message">
                <span v-show="passwordError">密碼與確認密碼不符。</span>
              </div>

              <div class="form-wrapper mt-4">
                <label for="checkPassword">密碼確認</label>
                <div>
                  <input
                    id="checkPassword"
                    name="checkPassword"
                    type="password"
                    class="form"
                    placeholder="請再次輸入密碼"
                    required
                  />
                </div>
              </div>

              <div class="mt-4 d-flex justify-content-end">
                <button type="submit" class="btn">儲存</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="sidebar"></div> -->
  </div>
</template>

<style scoped>
@import "../assets/scss/login.scss";
.user-section {
  outline: 1px solid #e6ecf0;
  width: 639px;
  height: 1200px;
  /* margin-left: 342px; */
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

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        id: "",
        account: "",
        name: "",
        email: "",
      },
      password: "",
      checkPassword: "",
      isProcessing: false,
      accountError: false,
      emailError: false,
      passwordError: false,
    };
  },
};
</script>