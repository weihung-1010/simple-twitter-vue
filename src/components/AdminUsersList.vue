
<template>
  <div class="users-list">
    <div class="cards-container row">
      <!-- 使用者卡片 -->
      <div class="col-3 p-0" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="banner">
            <img :src="user.cover" alt="banner" />
          </div>
          <img class="avatar" :src="user.avatar" alt="avatar" />
          <div class="card-content">
            <div class="name">
              <p :title="user.name">{{ user.name }}</p>
            </div>
            <div class="account">
              <p>@{{ user.account }}</p>
            </div>
            <div class="tweets-likes">
              <div class="tweets-count">
                <img
                  class="pen-icon icon"
                  src="~@/assets/images/tweetPen@2x.png"
                  alt="pen-icon"
                />
                <span class="tweets-total">{{
                  user.tweetCount | countConvert
                }}</span>
              </div>
              <div class="likes-count">
                <img
                  class="like-icon icon"
                  src="~@/assets/images/tweetLike@2x.png"
                  alt="like-icon"
                />
                <span class="likes-total">{{
                  user.likeCount | countConvert
                }}</span>
              </div>
            </div>
            <div class="followings-followers">
              <div class="followings">
                <span class="followings-count"
                  >{{ user.followingCount | countConvert }} 個</span
                ><span>跟隨中</span>
              </div>
              <div class="followers">
                <span class="followers-count"
                  >{{ user.followerCount | countConvert }} 位</span
                ><span>跟隨者</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countConvertFilter } from "./../utils/mixins";
export default {
  name: "AdminUsersList",
  mixins: [countConvertFilter],
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



<style lang="scss" scoped>
@import "./../assets/scss/adminUsers.scss";
</style>