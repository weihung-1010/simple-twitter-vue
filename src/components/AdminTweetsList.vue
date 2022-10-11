
<template>
  <div class="tweets-list">
    <h4 class="title">推文清單</h4>
    <div class="tweets">
      <div class="tweet" v-for="tweet in initialTweets" :key="tweet.id">
        <img
          class="avatar"
          :src="tweet.User.avatar | emptyImage"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";

export default {
  name: "AdminTweetsList",
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async handleDeleteBtnClick(tweetId) {
      try {
        // 發送API請伺服器刪掉這則tweet
        const { data } = await adminAPI.tweets.delete({ tweetId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 告訴父元件哪一條tweet被刪掉
        this.$emit("after-delete-tweet", tweetId);
        Toast.fire({
          icon: "success",
          title: "推文刪除成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法刪除此推文，請稍後再試",
        });
      }
    },
  },
  filters: {
    onlyDisplay50Letters(string) {
      return string.length > 50 ? string.slice(0, 50) + "..." : string;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/admin.scss";
</style>