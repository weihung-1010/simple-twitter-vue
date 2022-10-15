<template>
  <div
    class="modal fade"
    id="replyTweetModal"
    tabindex="-1"
    aria-labelledby="replyTweetModalLabe"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form class="form-wrapper" @submit.stop.prevent="handleSubmitReply">
          <div class="modal-header">
            <button
              type="button"
              class="close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img
                aria-hidden="true"
                src="~@/assets/image/modal-close-icon.png"
                alt="close-icon"
              />
            </button>
          </div>
          <div class="modal-body">
            <div class="tweet-area">
              <div class="tweet">
                <img
                  class="avatar"
                  :src="replyModalData.userAvatar"
                  alt="avatar"
                />
                <div class="tweet-info">
                  <div class="tweet-detail">
                    <span class="user-name">{{ replyModalData.userName }}</span>
                    <span class="account-created-time"
                      >@{{ replyModalData.userAccount }}&#xb7;{{
                        replyModalData.createdAt | fromNow
                      }}</span
                    >
                  </div>
                  <p class="tweet-text">
                    {{ replyModalData.description }}
                  </p>
                  <div class="reply-to">
                    <span>回覆給</span>&nbsp;<span class="reply-to-account"
                      >@{{ replyModalData.userAccount }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="reply-area">
              <div class="modal-user-avatar">
                <!-- 這邊圖片之後記得改 currentUser 的大頭貼 -->
                <img :src="currentUser.avatar" alt="avatar" />
              </div>
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
              v-if="description && description.trim().length === 0"
              class="alert-msg"
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
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";

export default {
  name: "ReplyModal",
  mixins: [fromNowFilter],
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
        // 檢驗內容是否符合標準
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

        // 如果在單一貼文頁面使用回覆功能，需要即時顯示新回覆內容，傳 ->> ReplyList.vue
        if (this.$route.name === "reply-list") {
          this.$emit("after-submit-reply", this.replyModalData.id);
        } else if (this.$route.name === "main-page") {
          this.$emit("main-after-submit-reply", this.replyModalData.id);
        } else if (
          this.$route.name === "main-tweets" ||
          this.$route.name === "liked-tweets"
        ) {
          this.$emit("user-after-submit-reply", this.replyModalData.id);
        }
        Toast.fire({
          icon: "success",
          title: "回覆推文成功",
        });
        // 送出後清空新增推文區塊的文字
        this.description = "";
        //關掉Modal
        $("#replyTweetModal").modal("hide");
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法發送回覆，請稍後再試",
        });
      }
    },
  },
};
</script>
