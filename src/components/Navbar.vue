<template>
  <div class="container">
    <div class="navbar">
      <!-- 導覽列標籤 -->
      <div class="nav-tags">
        <!-- 登入者身分為 admin 時顯示 -->
        <template v-if="currentUser.role === 'admin'">
          <img
            class="logo mb-4"
            src="https://i.postimg.cc/Dfp23k8g/logo-2x.png"
          />
          <router-link :to="{ name: 'admin-tweets' }" class="tab">
            <img class="icon" src="https://i.postimg.cc/MK4VTFr0/home.png" />
            <img
              class="icon-active"
              src="https://i.postimg.cc/V6WM7sgm/Home-Active.png"
            />
            <h5>推文清單</h5>
          </router-link>

          <router-link :to="{ name: 'admin-users' }" class="tab">
            <img class="icon" src="https://i.postimg.cc/L8VJKQf3/User.png" />
            <img
              class="icon-active"
              src="https://i.postimg.cc/j2VxJyPj/User-Active.png"
            />
            <h5>使用者列表</h5>
          </router-link>
        </template>

        <!-- 登入者身分為 user 時顯示 -->
        <template v-else>
          <img
            class="logo mb-4"
            src="https://i.postimg.cc/Dfp23k8g/logo-2x.png"
          />
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
            <h5>設定</h5>
          </router-link>
          <button
            type="button"
            class="btn btn-primary btn-post-tweet"
            data-toggle="modal"
            data-target="#createTweetModal"
          >
            推文
          </button>
        </template>
      </div>

      <!-- 登出按鈕 -->
      <div style="cursor: pointer" class="d-flex logout-container">
        <img class="logout" src="https://i.postimg.cc/NjVnH4Yp/logoOut.png" />
        <button type="button" class="ml-2 logout-btn" @click="logout">
          <h5>登出</h5>
        </button>
      </div>
    </div>
    <div v-if="currentUser.role === 'user'">
      <CreateTweetModal />
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
import CreateTweetModal from "./CreateTweetModal.vue";

export default {
  name: "Navbar",
  components: { CreateTweetModal },
  // 取得並載入 Vuex state 中的 currentUser 資料
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  data() {
    return {
      roleWhenLogin: "",
    };
  },
  methods: {
    logout() {
      // 因為登出時會清空 currentUser 的資料，故先把 currentUser.role 記錄下來
      this.roleWhenLogin = this.currentUser.role;

      // 發動 revokeAuthentication 這個 mutation，修改 state 中 currentUser 的資料
      this.$store.commit("revokeAuthentication");

      // 透過 roleWhenLogin 判斷要回到前台還是後台的登入頁面
      if (this.roleWhenLogin === "user") {
        this.$router.push("/login");
      } else {
        this.$router.push("/admin");
      }
    },
  },
};
</script>



<style scoped lang="scss">
@import "../assets/scss/setups.scss";

.navbar {
  width: 178px;
  height: 1200px;
  // 測試開始
  position: fixed;
  left: 130px;
  // 測試結束
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0;
}

.nav-tags {
  position: absolute;
  left: 0;
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
  margin-left: 13px;
}

.icon {
  margin-left: 16.9px;
  margin-right: 16.9px;
}

.icon,
.logout {
  width: 20px;
  height: 20px;
}

.btn-post-tweet {
  position: absolute;
  left: 0;
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
  margin-left: 16.9px;
  margin-right: 16.9px;
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

.logout-container {
  position: absolute;
  left: 19px;
  bottom: 16px;
  .logout-btn {
    all: unset;
    font-weight: 700;
    font-size: 18px;
    color: $dark-90-color;
    &:hover {
      color: $logo-color;
    }
  }
}

// createTweetModal
// .modal-content {
//   border: none;
//   width: 634px;
//   height: 300px;
//   border-radius: 14px;
//   .modal-header {
//     height: 56px;
//     .btn-x {
//       background-color: #ffffff;
//       border: none;
//     }
//     .iconX {
//       width: 15px;
//       height: 15px;
//     }
//   }
//   .avatar-container {
//     height: 0%;
//     border-radius: 50%;
//   }
//   .modal-body {
//     .avatar {
//       width: 50px;
//       height: 50px;
//       border-radius: 50%;
//     }
//   }
//   .modal-form {
//     textarea {
//       height: 150px;
//       width: 530px;
//       overflow: hidden;
//       resize: none;
//       border: none;
//       outline: none;
//       margin-left: 8px;
//       margin-top: 10px;
//     }
//   }
//   .modal-footer {
//     border: none;
//     .create-btn {
//       position: relative;
//       left: 28px;
//       bottom: 10px;
//       width: 64px;
//       height: 40px;
//       background: #ff6600;
//       border-radius: 50px;
//       border: none;
//     }
//   }
// }
</style>