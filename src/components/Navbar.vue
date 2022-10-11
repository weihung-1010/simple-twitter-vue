<template>
  <div class="navbar">
    <div>
      <img class="logo mb-4" src="https://i.postimg.cc/Dfp23k8g/logo-2x.png" />
      <router-link :to="{ name: 'main' }" class="tab">
        <img class="icon" src="https://i.postimg.cc/MK4VTFr0/home.png" />
        <img
          class="icon-active"
          src="https://i.postimg.cc/V6WM7sgm/Home-Active.png"
        />
        <h5>首頁</h5>
      </router-link>

      <router-link :to="{ name: 'profile' }" class="tab">
        <img class="icon" src="https://i.postimg.cc/L8VJKQf3/User.png" />
        <img
          class="icon-active"
          src="https://i.postimg.cc/j2VxJyPj/User-Active.png"
        />
        <h5>個人資料</h5>
      </router-link>

      <router-link :to="{ name: 'setting' }" class="tab">
        <img class="icon" src="https://i.postimg.cc/qqZNYN3V/Setting.png" />
        <img
          class="icon-active"
          src="https://i.postimg.cc/FzfrYD78/Setting-Active.png"
        />
        <h5 :class="{ active: navbarSetting }">設定</h5>
      </router-link>
      <button class="btn btn-primary btn-post-tweet">推文</button>
    </div>

    <div style="cursor: pointer" class="d-flex">
      <img class="logout" src="https://i.postimg.cc/NjVnH4Yp/logoOut.png" />
      <h5 class="ml-2">登出</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHome: false,
      navbarProfile: false,
      navbarSetting: false,
    };
  },
};
</script>


<style scoped>
@import "../assets/scss/setups.scss";

.navbar {
  width: 178px;
  height: 1200px;
  position: fixed;
  left: 130px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.tab {
  display: flex;
  margin-bottom: 40px;
  text-decoration: none;
  color: #44444f;
}

.logo {
  width: 40px;
  height: 40px;
}

.icon {
  margin-left: 8px;
  margin-right: 8px;
}

.icon,
.logout {
  width: 20px;
  height: 20px;
}

.btn-post-tweet {
  width: 178px;
  height: 46px;
  font-family: "Noto Sans TC";
  font-weight: 400;
  background-color: #ff6600;
  border-color: transparent;
  border-radius: 23px;
  color: #ffffff;
}

.tab .icon-active {
  display: none;
  margin-left: 8px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
}

.router-link-exact-active {
  color: #ff6600;
}

.router-link-exact-active .icon {
  display: none;
}

.router-link-exact-active .icon-active {
  display: block;
  width: 20px;
}
</style>