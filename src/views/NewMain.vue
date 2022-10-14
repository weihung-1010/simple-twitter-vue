<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <!-- 左邊導覽列 -->
        <Navbar />
      </div>

      <div class="col-7">
        <!-- 中間 Spinner -->
        <Spinner v-if="isLoading" />
        <!-- 中間推文首頁＆推文回覆頁 -->
        <router-view
          v-else
          :theTweetId="theTweetId"
          :initialTweets="tweets"
          :newReply="newReply"
          :popular="topPopular"
          @after-click-reply="afterClickReply"
          class="col-7"
        />
      </div>

      <div class="col-3">
        <!-- 右邊追蹤板 -->
        <Followboard />
      </div>

      <!-- 互動視窗 -->
      <TweetModal @after-submit-tweet="afterSubmitTweet" />
      <ReplyModal
        :replyModalData="replyModalData"
        @main-after-submit-reply="mainAfterSubmitReply"
      />
    </div>
  </div>
</template>

<script>
import Followboard from "../components/Followboard.vue";
import Navbar from "../components/Navbar.vue";
import TweetModal from "../components/TweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import Spinner from "../components/Spinner.vue";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

export default {
  name: "NewMain",
  computed: {
    ...mapState(["currentUser", "topPopular"]),
  },
  components: {
    Followboard,
    Navbar,
    ReplyModal,
    TweetModal,
    Spinner,
  },
  data() {
    return {
      tweets: [],
      replyModalData: {},
      newReply: {},
      theTweetId: -1, //及時增加留言數使用
      isLoading: true,
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        this.isLoading = true;
        const response = await tweetsAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error("無法取得推文資料，請稍後再試");
        }
        this.tweets = response.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    mainAfterSubmitReply(id) {
      //即時顯示留言數字 + 1
      this.theTweetId = id;
    },
    afterSubmitTweet(payload) {
      const { tweetId, description } = payload;
      // 新增的推文加入下面的推文清單中
      this.tweets.unshift({
        id: tweetId,
        description: description,
        likeCount: 0,
        replyCount: 0,
        isLiked: false,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
          account: this.currentUser.account,
        },
      });
    },
    afterClickReply(payload) {
      // 點擊回覆，顯示 modal 使用的資料
      const { id, description, User, createdAt } = payload;
      this.replyModalData = {
        id,
        description,
        userName: User.name,
        userAccount: User.account,
        userAvatar: User.avatar,
        createdAt: createdAt,
      };
    },
  },
};
</script>

