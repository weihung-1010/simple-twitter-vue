<template>
  <div class="main">
    <div class="title">
      <h4 class="title-text">首頁</h4>
    </div>

    <!-- 新增推文區塊 -->
    <form @submit.stop.prevent="handleSubmit">
      <div class="main-wrapper">
        <div class="tweet-wrapper">
          <div class="avatar-input d-flex">
            <router-link to="">
              <img
                class="user-avatar"
                src="https://i.imgur.com/hAKcS3E.jpg"
                alt="user-avatar"
              />
            </router-link>
            <textarea type="text" placeholder="有什麼新鮮事？" />
            <div class="input-footer">
              <button type="submit" class="btn-tweet btn-info btn">推文</button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="line"></div>

    <!-- 推文牆 -->
    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 跳出 modal -->
        <div
          class="tweet-reply d-flex"
          data-toggle="modal"
          data-target="#replyModal"
        >
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <!-- replyModal -->
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

    <!-- 串API時刪除 -->
    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>6666</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>1111</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>test</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>~~~~~~</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>~~~~~~</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>~~~~~~</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <div class="tweets-wall">
      <div class="user-img">
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>
      <div class="tweet-box">
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>
        <div class="tweet-text">
          <p>~~~~~~</p>
        </div>
      </div>
      <div class="tweet-reply-heart d-flex">
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.main {
  border-right: #e6ecf0 1px solid;
  border-left: #e6ecf0 1px solid;
  position: relative;
  width: 639px;
  height: 100vh; // 高度維持在視窗高度
  overflow-y: scroll; // 產生捲軸
}
//新增貼文
.tweet-wrapper {
  height: 136px;
}
.title {
  position: sticky;
  top: 0;
  background: $white;
  height: 74px;
  border-bottom: #e6ecf0 1px solid;
  z-index: 1;
}
.title-text {
  padding: 24px 26px;
}
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.avatar-input {
  width: 90%;
  padding: 24px 26px;
}

textarea {
  padding: 12px;
  width: 100%;
  height: 60px;
  border: none;
  resize: none;
  outline: none;
}

.btn-tweet {
  position: relative;
  left: 60px;
  top: 56px;
  background-color: #ff6600;
  height: 40px;
  width: 64px;
  border-radius: 50px;
  border-color: transparent;
  color: white;
}
.line {
  width: 100%;
  height: 10px;
  background: #e6ecf0;
}

//貼文牆
.tweets-wall {
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
}
.user-img {
  margin-top: 16px;
  margin-left: 24px;
  width: 50px;
  border-radius: 50px;
}
.tweet-content {
  position: relative;
  width: 80%;
  height: 22px;
  display: flex;
  padding: 0 29px 0 0;
  left: 82px;
  top: -48px;
}
.name {
  font-weight: 700;
  font-size: 16px;
  color: #171725;
}
.account,
.time {
  position: relative;
  font-weight: 400;
  font-size: 14px;
  top: 2px;
  padding-left: 8px;
  color: #6c757d;
}
.time {
  padding-left: 2px;
}
.tweet-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 528px;
  color: #171725;
  position: relative;
  left: 82px;
  top: -42px;
}
.tweet-reply-heart {
  position: relative;
  left: 82px;
  top: -38px;
  cursor: pointer;
}
.icon-reply-heart {
  width: 13.4px;
  height: 12.61px;
  margin-top: 4px;
}
.number {
  width: 18px;
  height: 14px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  color: #6c757d;
  padding-left: 9.3px;
}
.tweet-heart {
  padding-left: 41.3px;
}

// replyModal
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 634px;
  height: 500px;
  background-color: #ffffff;
  background-clip: padding-box;
  border-radius: 14px;
  .form-wrapper {
    .modal-header {
      margin-top: -32px;
      display: flex;
      width: 100%;
      height: 56px;
      border-bottom: 1px solid #e6ecf0;
      background-color: #ffffff;
      .close-btn {
        border: none;
        background: #ffffff;
      }
      .iconX {
        width: 15px;
        height: 15px;
      }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 450px;
      padding: 16px 24px;
      background: #ffffff;
      .tweet-area {
        display: flex;
        flex-direction: column;
        .tweet {
          display: flex;
          position: relative;
          // 連結線
          &::before {
            content: "";
            position: absolute;
            left: 25px;
            top: 60px;
            height: calc(100% - 45px); // 裝飾線長度自動調整
            background-color: #b5b5be;
            border-right: 1px solid #b5b5be;
            border-left: 1px solid #b5b5be;
          }
          .avatar {
            height: 50px;
            width: 50px;
            margin-right: 8px;
            border-radius: 50%;
          }
          .tweet-info {
            width: 85%;
            display: flex;
            flex-direction: column;
            .tweet-detail {
              width: 100%;
              align-items: center;
            }
            .user-name {
              font-size: 16px;
              font-weight: 700;
              color: #171725;
              margin-right: 8px;
            }
            .account-created-time {
              font-size: 14px;
              font-weight: 400;
              color: #6c757d;
            }
            .tweet-text {
              width: 100%;
              margin-left: -81px;
              margin-top: 50px;
              color: #171725;
              font-size: 16px;
              font-weight: 400;
              // 避免文字過長溢出
              overflow-wrap: break-word;
            }
            .reply-to {
              width: 100%;
              margin-top: -35px;
              span {
                font-size: 14px;
                font-weight: 400;
                color: #6c757d;
              }
              .reply-to-account {
                color: #ff6600;
              }
            }
          }
        }
      }
      .reply-area {
        display: flex;
        flex: 1;
        width: 100%;
        margin-top: 23px;
        .modal-user-avatar {
          width: 50px;
          height: 50px;
          margin-right: 8px;
          border-radius: 50%;
        }
        .modal-tweet-text {
          flex: 1;
          textarea {
            width: 90%;
            height: 75%;
            border-radius: 5px;
            padding: 0;
            padding-top: 10px;
          }
        }
      }
      .alert-error {
        position: absolute;
        right: 100px;
        bottom: 28px;
        font-size: 15px;
        font-weight: 500;
        color: #fc5a5a;
      }
      .modal-reply-btn {
        width: 64px;
        height: 40px;
        position: absolute;
        bottom: 16px;
        right: 16px;
        font-size: 16px;
        font-weight: 400;
        background: #ff6600;
        border-radius: 50px;
        color: #ffffff;
        border: none;
      }
    }
  }
}
</style>