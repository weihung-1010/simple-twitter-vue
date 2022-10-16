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
    <ReplyModal />

  </div>
</template>


<script>
import ReplyThread from "../components/ReplyThread.vue";
import ReplyModal from "../components/ReplyModal.vue";
// import { mapState } from "vuex";
// import { Toast } from "./../utils/helpers";
// import tweetsAPI from "./../apis/tweets";

export default {
  name: "ReplyList",
  components: { ReplyThread, ReplyModal },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>