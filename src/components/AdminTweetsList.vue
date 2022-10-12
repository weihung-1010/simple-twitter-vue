
<template>
  <div class="tweets-container">
    <div class="tweets">
      <div class="tweet">
        <!-- Avatar -->
        <div class="img-container">
          <!-- 若無頭像則套用 emptyImage 濾鏡，改用替代圖片 -->
          <img class="avatar" :src="avatar | emptyImage" alt="avatar" />
        </div>

        <!-- Tweet Details -->
        <div class="detail-container">
          <div class="tweet-owner">
            <span class="owner-name">{{ name }}</span>
            <span class="owner-account-datetime"
              >@{{ account }}・{{ createdAt | fromNow }}</span
            >
          </div>
          <div class="tweet-content">
            {{ description | first50Letters }}
          </div>
          <button class="delete-btn" @click.prevent.stop="testBtnClick()">
            ✕
          </button>
        </div>
      </div>

      <div class="tweet" v-for="tweet in initialTweets" :key="tweet.id">
        <!-- Avatar -->
        <div class="img-container">
          <!-- 若無頭像則套用 emptyImage 濾鏡，改用替代圖片 -->
          <!-- <img
            class="avatar"
            :src="tweet.User.avatar | emptyImage"
            alt="avatar"
          /> -->
        </div>

        <!-- Tweet Details -->
        <div class="detail-container">
          <div class="tweet-owner">
            <span class="owner-name">{{ tweet.name }}</span>
            <span class="owner-account-datetime"
              >@{{ tweet.account }}・{{ tweet.createdAt | fromNow }}</span
            >
          </div>
          <div class="tweet-content">
            {{ tweet.description | first50Letters }}
          </div>
          <button
            class="delete-btn"
            @click.prevent.stop="handleDeleteBtnClick(tweet.id)"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  fromNowFilter,
  emptyImageFilter,
  first50LettersFilter,
} from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";

export default {
  name: "AdminTweetsList",
  mixins: [fromNowFilter, emptyImageFilter, first50LettersFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      avatar: null,
      name: "Yuzu",
      account: "yuzuxhi",
      createdAt: "2022-10-11T21:27:48.000Z",
      description: "1234567890123456789012345678901234567890123456789012345",
    };
  },
  methods: {
    testBtnClick() {
      console.log("hi, Yuzu!");
    },
    async handleDeleteBtnClick(tweetId) {
      try {
        // 透過 API 請伺服器刪掉這篇推文
        const { data } = await adminAPI.tweets.delete({ tweetId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 觸發事件，傳回父元件並使其執行刪除推文的動作
        this.$emit("after-delete-tweet", tweetId);
        Toast.fire({
          icon: "success",
          title: "推文已成功刪除",
        });
      } catch (error) {
        // 報錯通知
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

<style lang="scss">
@import "../assets/scss/admin.scss";
</style>