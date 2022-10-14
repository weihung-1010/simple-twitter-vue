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
          <div class="modal-body">
            <div class="tweet-area">
              <div class="tweet">
                <img
                  class="avatar"
                  src="https://i.imgur.com/hAKcS3E.jpg"
                  alt="avatar"
                />
                <div class="tweet-info">
                  <div class="tweet-detail">
                    <span class="user-name">Apple</span>
                    <span class="account-created-time">@apple ‧1個月前</span>
                  </div>
                  <p class="tweet-text">測試1234567853334234567876533555</p>
                  <div class="reply-to">
                    <span>回覆給</span>&nbsp;<span class="reply-to-account"
                      >@Apple</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="reply-area">
              <div class="modal-user-avatar">
                <!-- 改 currentUser 的頭貼 -->
                <img
                  class="modal-user-avatar"
                  src="https://i.imgur.com/hAKcS3E.jpg"
                  alt="avatar"
                />
              </div>
              <div class="modal-tweet-text">
                <textarea
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
            <button class="modal-reply-btn" type="submit">回覆</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ReplyModal",
};
</script>


<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>