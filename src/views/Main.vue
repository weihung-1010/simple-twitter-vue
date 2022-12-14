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
          :popular="topPopular"
          @after-click-reply="afterClickReply"
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
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import Followboard from "../components/Followboard";
import TweetModal from "../components/TweetModal";
import ReplyModal from "../components/ReplyModal.vue";
import tweetsAPI from "../apis/tweets";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "Main",
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
      isLoading: true,
      // 要傳到 ReplyModal 的資料
      replyModalData: {},
      // 用來記錄被點擊回覆的推文 ID（預設為 -1）
      // 子元件 MainPage 會監聽此變數，若有變更則增加該推文的留言數
      theTweetId: -1,
    };
  },
  created() {
    // 載入頁面時取得所有推文
    this.fetchTweets();
  },
  methods: {
    // 透過 API 取得所有推文
    async fetchTweets() {
      try {
        // 在取得資料前，讓 spinner 出現
        this.isLoading = true;

        // 向 API 請求所有推文資料
        const response = await tweetsAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error("無法取得推文，請稍後再試");
        }

        // 將回傳的所有推文資料指派給 tweets
        this.tweets = response.data;

        // 成功取得資料後，讓 spinner 消失
        this.isLoading = false;
      } catch (error) {
        // 確定無法資料後，讓 spinner 消失
        this.isLoading = false;

        // 報錯
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },

    // 在 MainPage (Main)的 ReplyModal 點擊回覆按鈕後
    mainAfterSubmitReply(id) {
      //即時顯示留言數字 + 1
      this.theTweetId = id;
    },

    // 按下推文按鈕後，將新推文的資料加入推文清單中
    afterSubmitTweet(payload) {
      const {
        id, // tweetID
        description,
        UserId,
        account,
        commentCount,
        createdAt,
        likeCount,
        name,
        avatar,
      } = payload;


      this.tweets.unshift({
        id, // tweetID
        UserId,
        description,
        account,
        name,
        createdAt,
        likeCount,
        commentCount,
        avatar,
        isLike: false,
      });
    },

    // 點擊留言圖示後，將該則推文的資料傳給 replyModal
    afterClickReply(payload) {
      const { id, avatar, name, account, createdAt, description } = payload;

      this.replyModalData = {
        id, // tweetID
        avatar,
        name,
        account,
        createdAt,
        description,
      };
    },
  },
};
</script>



