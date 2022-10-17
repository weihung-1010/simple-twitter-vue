<template>
  <div class="main">
    <div class="title">
      <h4 class="title-text">
        <router-link :to="{ name: 'main' }">
          <img
            class="left-arrow"
            src="~@/assets/images/leftArrow@2x.png"
            alt="left-arrow"
          /> </router-link
        >推文
      </h4>
    </div>

    <!-- 貼文回覆串 component -->
    <ReplyThread
      :initialTweet="tweet"
      :initialRepliesLength="repliesLength"
      :initialReplies="replies"
      @after-click-reply="afterClickReply"
    />

    <!-- 回覆 modal -->
    <ReplyModal :replyModalData="tweet" @after-submit-reply="fetchReplies" />
  </div>
</template>


<script>
import ReplyThread from "../components/ReplyThread.vue";
import ReplyModal from "../components/ReplyModal.vue";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

export default {
  name: "ReplyList",
  components: { ReplyThread, ReplyModal },
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      tweet: {}, //要回覆的貼文
      replies: [], // 回覆串
      repliesLength: 0, // 留言數
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 監聽路由（path: 'replylist/:id'）
    const { id } = to.params;
    this.fetchTweet(id);
    this.fetchReplies(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    this.fetchReplies(id);
  },
  methods: {
    // 取得特定的推文資料
    async fetchTweet(id) {
      try {
        const response = await tweetsAPI.tweets.getOneTweet({
          tweetId: id,
        });
        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.tweet = response.data;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },

    // 取得特定推文的回覆串
    async fetchReplies(id) {
      try {
        const response = await tweetsAPI.replies.getReplies({
          tweetId: id,
        });

        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.replies = [...response.data];
        this.repliesLength = this.replies.length;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得留言資料，請稍後再試",
        });
      }
    },

    // 點擊留言圖示後，會觸發父元件 Main.vue 動作
    // 父元件 Main.vue 會將該則推文的資料(payload)傳給 replyModal 來顯示
    afterClickReply(payload) {
      this.$emit("after-click-reply", payload);
      const { id, avatar, name, account, createdAt, description } = payload;
      // 再將推文資料指派給 this.tweet，連動子元件去做即時變化
      this.tweet = {
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


<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>