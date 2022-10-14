<template>
  <!-- TweetModal -->
  <div>
    <div
      class="modal"
      id="TweetModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="TweetModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <button
                type="button"
                class="btn-x"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img
                  class="iconX"
                  src="https://i.postimg.cc/G3MzrzPr/iconX.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-wrapper d-flex">
              <div class="avatar-container">
                <img
                  class="avatar"
                  src="https://i.imgur.com/hAKcS3E.jpg"
                  alt=""
                />
              </div>

              <div class="modal-text">
                <div class="d-flex">
                  <form class="modal-form">
                    <textarea
                      placeholder="你有什麼新鮮事？"
                      required
                    ></textarea>
                    <div class="modal-footer">
                      <!-- <div class="modal-error">
                              <span class="alert-error">
                                字數不可超過140字
                              </span>
                              <span class="alert-error"> 內容不可空白 </span>
                            </div> -->
                      <button
                        type="button"
                        @click.prevent.stop="postTweetModal"
                        class="create-btn btn-info btn"
                      >
                        推文
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetModal",
};
</script>


<style scoped lang="scss">
@import "../assets/scss/setups.scss";

.modal-content {
  border: none;
  width: 634px;
  height: 300px;
  border-radius: 14px;
  .modal-header {
    height: 56px;
    .btn-x {
      background-color: #ffffff;
      border: none;
    }
    .iconX {
      width: 15px;
      height: 15px;
    }
  }
  .avatar-container {
    height: 0%;
    border-radius: 50%;
  }
  .modal-body {
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .modal-form {
    textarea {
      height: 150px;
      width: 530px;
      overflow: hidden;
      resize: none;
      border: none;
      outline: none;
      margin-left: 8px;
      margin-top: 10px;
    }
  }
  .modal-footer {
    border: none;
    .create-btn {
      position: relative;
      left: 28px;
      bottom: 10px;
      width: 64px;
      height: 40px;
      background: #ff6600;
      border-radius: 50px;
      border: none;
    }
  }
}
</style>