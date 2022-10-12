<template>
  <form action="submit">
    <div
      class="modal fade new-tweet-modal-container"
      id="newTweetModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newTweetModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img
                aria-hidden="true"
                src="https://i.postimg.cc/G3MzrzPr/iconX.png"
                alt="close-icon"
              />
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-user-avatar">
              <img src="https://i.imgur.com/hAKcS3E.jpg" alt="avatar" />
            </div>
            <div class="modal-tweet-text">
              <textarea
                v-model="description"
                class="form-control"
                id="tweet-text"
                name="tweet-text"
                type="text"
                placeholder="有什麼新鮮事？"
              />
            </div>
            <!-- <span class="alert-msg" v-if="description.length > 140"
              >字數不可超過 140 字</span -->
            >
            <button
              class="modal-tweet-btn"
              type="submit"
              
            >
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>