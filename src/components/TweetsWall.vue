<template>
  <!-- 修改 -->
  <div>
    <div class="tweets-wall" v-for="tweet in tweets" :key="tweet.id">
      <div class="user-img">
        <!-- 待新增  router-link：replylist -->
        <!-- replylist 的 router-link -->

        <!-- 待新增 router-link：該用戶的個人資料頁 -->
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            :src="tweet.avatar | emptyImage"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <!-- 待新增 router-link：該用戶的個人資料頁 -->
          <router-link to="">
            <p class="name">{{ tweet.name }}</p>
          </router-link>

          <!-- 待新增 router-link：該用戶的個人資料頁 -->
          <router-link to="">
            <p class="account">@{{ tweet.account }}</p>
          </router-link>

          <p class="time">‧{{ tweet.createdAt | fromNow }}</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>{{ tweet.description }}</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
        <div
          @click.prevent="isClickedTweet(tweet.id)"
          class="tweet-reply d-flex"
          data-toggle="modal"
          data-target="#replyModal"
        >
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
            alt="reply-icon"
          />
          <p class="number">{{ tweet.commentCount }}</p>
        </div>

        <!-- 紅色愛心圖示（點擊後會加到喜歡的內容） -->
        <div
          class="tweet-heart d-flex"
          v-if="tweet.isLiked"
          @click.stop.prevent="deleteLiked(tweet.id)"
        >
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/rFB1FHD6/icon-Liked.png"
            alt="red-heart-icon"
          />
          <p class="number">{{ tweet.likeCount }}</p>
        </div>

        <!-- 空白愛心圖示（點擊後會加到喜歡的內容） -->
        <div
          class="tweet-heart d-flex"
          v-if="!tweet.isLiked"
          @click.stop.prevent="addLiked(tweet.id)"
        >
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
            alt="empty-heart-icon"
          />
          <p class="number">{{ tweet.likeCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

export default {
  name: "TweetsWall",
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
      oneTweet: {},
    };
  },
  watch: {
    initialTweets(newValue) {
      // 監聽：為了發推文後，即時更新
      this.tweets = [...newValue];
    },
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    // created 時抓取從父元件 MainPage 繼承來的推文資料
    fetchTweets() {
      this.tweets = this.initialTweets;
    },


    // 透過 tweetID 找出被點擊留言的哪一篇推文 -> 顯示 modal 使用
    isClickedTweet(tweetId) {
      this.oneTweet = this.tweets.find((tweet) => {
        return tweet.id === tweetId;
      });
      
      this.$emit("after-click-reply", this.oneTweet);
    },

    // 當點擊喜歡則加上愛心並加愛心數
    async addLiked(tweetId) {
      try {
        const { data } = await tweetsAPI.tweets.addLiked({ tweetId });
        console.log("addLiked data is:", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }
        //顯示紅心 & 愛心數加一
        this.tweets = this.tweets.map((tweet) => {
          return tweetId === tweet.id
            ? {
                ...tweet,
                isLiked: !tweet.isLiked,
                likeCount: tweet.likeCount + 1,
              }
            : tweet;
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法加入喜歡，請稍後再試",
        });
      }
    },

    // 點擊不喜歡則移除愛心並扣愛心數
    async deleteLiked(tweetId) {
      try {
        const { data } = await tweetsAPI.tweets.deleteLiked({ tweetId });
        console.log("deleteLiked data is:", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        //顯示空心 & 愛心數減一
        this.tweets = this.tweets.map((tweet) => {
          return tweetId === tweet.id
            ? {
                ...tweet,
                isLiked: !tweet.isLiked,
                likeCount: tweet.likeCount - 1,
              }
            : tweet;
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法移除喜歡，請稍後再試",
        });
      }
    },
  },
};
</script>



<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>