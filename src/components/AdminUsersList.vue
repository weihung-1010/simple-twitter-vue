
<template>
  <div class="users-container">
    <div class="row">
      <!-- card -->
      <div class="col-3 card-container" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="card-banner-container">
            <img :src="user.cover" alt="cover" class="card-banner-img" />
          </div>
          <div class="card-avatar-container">
            <img class="card-avatar-img" :src="user.avatar" alt="avatar" />
          </div>
          <div class="card-body">
            <div class="card-title">
              <img
                src="~@/assets/images/tweetPen@2x.png"
                alt="pen-icon"
                width="23.87px"
              />
              <span>{{ user.tweetCount }}</span>
              <img
                src="~@/assets/images/tweetLike@2x.png"
                alt="pen-icon"
                width="20.1px"
              />
              <span>{{ user.likeCount }}</span>
            </div>
            <div class="card-text">
              <span>{{ user.followingCount }}</span
              >跟隨中 <span>{{ user.followerCount }}</span
              >跟隨者
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminUsersList",
  props: {
    initialUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      users: this.initialUsers.filter((user) => user.account != "root"),
    };
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/setups.scss";
</style>