<template>
  <div
    class="modal fade"
    id="replyModal"
    tabindex="-1"
    aria-labelledby="replyModalLabe"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form class="form-wrapper" @submit.stop.prevent="handleSubmitReply">
          <div class="modal-header">
            <!-- 互動視窗的關閉按鈕 -->
            <button
              type="button"
              class="close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img
                class="iconX"
                aria-hidden="true"
                src="https://i.postimg.cc/G3MzrzPr/iconX.png"
                alt="close-icon"
              />
            </button>
          </div>

          <!-- 要回覆的推文 -->
          <div class="modal-body">
            <div class="tweet-area">
              <div class="tweet">
                <img
                  class="avatar"
                  :src="replyModalData.avatar | emptyImage"
                  alt="avatar"
                />
                <div class="tweet-info">
                  <div class="tweet-detail">
                    <span class="user-name">{{ replyModalData.name }}</span>
                    <span class="account-created-time"
                      >@{{ replyModalData.account }} ‧{{
                        replyModalData.createdAt | fromNow
                      }}</span
                    >
                  </div>
                  <p class="tweet-text">{{ replyModalData.description }}</p>
                  <div class="reply-to">
                    <span>回覆給</span>&nbsp;<span class="reply-to-account"
                      >@{{ replyModalData.account }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- currentUser 的頭像 -->
            <div class="reply-area">
              <div class="modal-user-avatar">
                <img
                  class="modal-user-avatar"
                  :src="currentUser.avatar | emptyImage"
                  alt="avatar"
                />
              </div>
              <!-- 留言回覆區塊 -->
              <div class="modal-tweet-text">
                <textarea
                  v-model="description"
                  class="form-control"
                  id="tweet-text"
                  name="tweet-text"
                  type="text"
                  placeholder="推你的回覆"
                  required
                />
              </div>
            </div>

            <span
              class="alert-error"
              v-if="description && description.trim().length === 0"
              >內容不可空白</span
            >
            <button
              class="modal-reply-btn"
              type="submit"
              :disabled="!description.trim().length"
            >
              回覆
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import $ from "jquery";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

export default {
  name: "ReplyModal",
  mixins: [fromNowFilter, emptyImageFilter],
  computed: {
    ...mapState(["currentUser"]),
  },
  props: {
    replyModalData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    async handleSubmitReply() {
      try {
        // 先回傳伺服器前先確認留言內容是否空白
        if (!this.description.trim()) {
          Toast.fire({
            icon: "warning",
            title: "內容不可空白",
          });
          return;
        }
        const { data } = await tweetsAPI.tweets.createReply({
          tweetId: this.replyModalData.id,
          comment: this.description,
        });
        if (data.status !== "success") {
          throw new Error(data.status);
        }

        // 如果是在 ReplyList 上按 ReplyModal 留言回覆的話
        // 則會將推文 ID 傳回父元件 ReplyList
        // -> 觸發父元件 ReplyList 去取得該推文的所有留言與留言數
        // -> 連動即時將留言數顯示在同為子元件的 ReplyThread
        if (this.$route.name === "reply-list") {
          this.$emit("after-submit-reply", this.replyModalData.id);


          // 如果是在 MainPage（Main）上按 ReplyModal 留言回覆的話
          // Main 會記錄此推文的 ID，並傳給子元件 MainPage
          // 子元件 MainPage 監聽到 ID 有變化的話，便會增加並顯示新留言數
        } else if (this.$route.name === "main-page") {
          this.$emit("main-after-submit-reply", this.replyModalData.id);


          // 如果是在個人 MainTweets 或個人 LikedTweets 上按 ReplyModal 留言回覆的話
          // Users page 會記錄此推文的 ID，並傳給子元件 MainTweets/LikedTweets
          // 子元件 MainTweets/LikedTweets 監聽到 ID 有變化的話，便會增加並顯示新留言數
        } else if (
          this.$route.name === "main-tweets" ||
          this.$route.name === "liked-tweets"
        ) {
          this.$emit("user-after-submit-reply", this.replyModalData.id);
        }

        // 跳出成功通知
        Toast.fire({
          icon: "success",
          title: "回覆成功",
        });

        // 送出後清空新增推文區塊的文字
        this.description = "";

        // 把互動視窗關掉
        $("#replyTweetModal").modal("hide");
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法回覆，請稍後再試",
        });
      }
    },
  },
};
</script>



<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>