<template>
  <div class="action-wrapper">
    <div class="action-item">
      <div class="pt-2 item ">
        <router-link class="item-link active" :to="{name: 'user-tweets'}">推文</router-link>
        <router-link class="item-link " to="">回覆</router-link>
        <router-link class="item-link " to="">喜歡的內容</router-link>
      </div>
    </div>
    <UserTweet />
    <UserReply />
    <UserLike />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.action-wrapper {
  .action-item {
    display: flex;
    .item {
      padding-bottom: 12px;
      margin-top: 18px;
      justify-content: space-around;
      z-index: 1;
    }
    .item-link {
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 12px;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      color: #657786;
    }
    .item-link:hover {
      color: #ff6600;
    }
    .active {
      color: #ff6600;
      border-bottom: 2px solid #ff6600;
    }
  }
}
</style>

<script>
import UserTweet from '../components/UserTweet.vue'
import UserReply from '../components/UserReply.vue'
import UserLike  from '../components/UserLike.vue'
export default {
  components:{
    UserTweet,
    UserReply,
    UserLike
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>