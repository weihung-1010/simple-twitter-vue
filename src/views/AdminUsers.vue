
<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <Navbar />
      </div>

      <div class="col-10">
        <div class="list-wrapper">
          <h4 class="list-title">使用者列表</h4>
          <Spinner v-if="isLoading" />
          <AdminUsersList v-else :initial-users="users" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "./../components/Navbar.vue";
import AdminUsersList from "./../components/AdminUsersList.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "AdminUsers",
  components: {
    Navbar,
    AdminUsersList,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  created() {
    // 載入頁面時取得所有使用者
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        // 在取得資料前，讓 spinner 出現
        this.isLoading = true;

        // 向 API 請求所有使用者資料
        const res = await adminAPI.users.get();
        console.log("res is: ", res);
        const { data } = res;
        console.log("data is: ", data); //待刪除

        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 將 API 回傳的使用者陣列存在 users 中
        this.users = data;
        console.log("users array is: ", this.users); //待刪除

        // 成功取得資料後，讓 spinner 消失
        this.isLoading = false;
      } catch (error) {
        // 確定無法資料後，讓 spinner 消失
        this.isLoading = false;

        // 報錯
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者列表，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/admin.scss";
</style>