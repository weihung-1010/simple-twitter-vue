<template>
  <div>
    <!-- 回覆目標 tweet -->
    <div class="tweet thread-container">
      <div class="tweet-sec">
        <div class="thread">
          <div class="d-flex">
            <div class="avatar-container">
              <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
              <img class="avatar" :src="oneTweet.avatar | emptyImage" />
            </div>

            <div class="thread-info">
              <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
              <div class="line1">{{ oneTweet.name }}</div>
              <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
              <div class="line4">@{{ oneTweet.account }}</div>
            </div>
          </div>

          <div class="description-sec">
            {{ oneTweet.description }}
          </div>
          <div class="date">{{ oneTweet.createdAt | accurateTime }}</div>
        </div>
      </div>

      <div class="num-sec d-flex">
        <div class="replyNum">
          <span class="number">{{ repliesLength }}</span> 回覆
        </div>
        <div class="likedNum">
          <span class="number">{{ oneTweet.likeCount }}</span> 喜歡次數
        </div>
      </div>
      <div class="icon-sec">
        <img src="~@/assets/images/tweetReply@2x.png" alt="reply-icon" />
        <img
          src="~@/assets/images/tweetLike@2x.png"
          alt="heart-icon"
          class="heart-icon"
        />
      </div>
    </div>

    <!-- 回覆串 thread -->
    <div
      class="thread thread-container"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="thread d-flex">
        <div class="avatar-container">
          <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
          <img class="avatar" :src="comment.avatar" alt="avatar" />
        </div>

        <div class="thread-info">
          <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
          <div class="line1">
            {{ comment.name }}
            <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
            <span class="line1--little"
              >@a{{ comment.account }}‧{{ comment.createdAt | fromNow }}</span
            >
          </div>

          <!-- 待新增 router-link：該用戶的個人資料頁 (start) -->
          <div class="line2">
            回覆<span class="line2--little">@{{ oneTweet.account }}</span>
          </div>

          <div class="line3">
            {{ comment.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import {
  fromNowFilter,
  accurateTimeFilter,
  emptyImageFilter,
} from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

export default {
  name: "ReplyThread",
  mixins: [fromNowFilter, accurateTimeFilter, emptyImageFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
    initialReplies: {
      type: Array,
      required: true,
    },
    initialRepliesLength: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      oneTweet: {},
      comments: [],
      repliesLength: 0,
    };
  },
  watch: {
    initialReplies(newValue) {
      this.comments = [...newValue];
    },
    initialTweet(newValue) {
      this.oneTweet = {
        ...this.oneTweet,
        ...newValue,
      };

      // const {
      //   avatar,
      //   userId,
      //   account,
      //   name,
      //   createdAt,
      //   description,
      //   id,
      //   isLike,
      //   likeCount,
      //   commentCount,
      // } = {
      //   avatar: this.oneTweet.avatar,
      //   id: this.oneTweet.id,
      //   userId: this.oneTweet.userId,
      //   account: this.oneTweet.account,
      //   name: this.oneTweet.name,
      //   createdAt: this.oneTweet.createdAt,
      //   description: this.oneTweet.description,
      //   isLike: this.oneTweet.isLike,
      //   likeCount: this.oneTweet.likeCount,
      //   commentCount: this.oneTweet.commentCount,
      // };
      // this.oneTweet = {
      //   avatar,
      //   userId,
      //   account,
      //   name,
      //   createdAt,
      //   description,
      //   id,
      //   isLike,
      //   likeCount,
      //   commentCount,
      // };
    },
    // 當新增評論時，及時更新評論數使用
    initialRepliesLength(newValue) {
      this.repliesLength = newValue;
    },
  },

  created() {
    this.fetchReplyList();
  },

  methods: {
    fetchReplyList() {
      this.oneTweet = this.initialTweet;
      this.comments = this.initialReplies;
      this.repliesLength = this.initialRepliesLength;
    },

    isClickedTweet() {
      // 被點擊的那則留言的資料，顯示 modal 使用
      this.oneTweet = this.initialTweet;
      this.$emit("after-click-reply", this.oneTweet);
    },

    // 當點擊喜歡則加上愛心並加愛心數
    async addLiked(tweetId) {
      try {
        const { data } = await tweetsAPI.tweets.addLiked({ tweetId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.oneTweet = {
          ...this.oneTweet,
          isLike: !this.oneTweet.isLike, //將愛心改成紅心
          likeCount: this.oneTweet.likeCount + 1, //愛心數加一
        };
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
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.oneTweet = {
          ...this.oneTweet,
          isLike: !this.oneTweet.isLike, //將愛心改成空心
          likeCount: this.oneTweet.likeCount - 1, //愛心數減一
        };
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
@import "../assets/scss/replyThread.scss";
</style>