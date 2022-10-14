<template>
  <div class="profile-wrapper">
    <div class="profile-title">
      <router-link class="prev" to="/main">
        <img src="https://i.postimg.cc/T3b8t37Q/Vector.png" />
      </router-link>
      <div class="name-tweet">
        <h5 class="name">John Doe</h5>
        <p class="tweet-count">25 推文</p>
      </div>
    </div>
    <img
      class="bg-img"
      src="https://i.postimg.cc/nLwNk2CD/unsplash-c-O9-jo-Z1-Fd-A.png"
      alt=""
    />
    <div class="user-wrapper">
      <img class="user-avatar" src="https://i.imgur.com/hAKcS3E.jpg" alt="" />
      <button
        class="btn-edit-info"
        data-toggle="modal"
        data-target="#user-edit"
      >
        編輯個人資料
      </button>
    </div>
    <div class="user-info">
      <h5 class="name">John Doe</h5>
      <p class="account">@heyjohn</p>
      <p class="text">個人簡介</p>
      <div class="follow-count">
        <router-link class="followed" to=""
          >34個
          <p class="followe-text">跟隨中</p>
        </router-link>
        <router-link class="follow" to=""
          >59位
          <p class="followe-text">跟隨者</p>
        </router-link>
      </div>
    </div>
    <!-- UserAction -->
    <UserAction />
    <!-- user-edit-modal -->
    <div
      class="modal fade"
      id="user-edit"
      tabindex="-1"
      aria-labelledby="user-edit-label"
      aria-hidden="true"
    >
      <form class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img
                class="iconX"
                src="https://i.postimg.cc/G3MzrzPr/iconX.png"
                alt=""
              />
            </button>
            <h5 class="modal-title" id="user-edit-label">編輯個人資料</h5>

            <button type="submit" class="modal-save">儲存</button>
          </div>
          <div class="modal-body">
            <div class="modal-img">
              <div>
                <!-- 背景圖這邊 -->
                <img
                  class="background-img"
                  src="https://i.postimg.cc/nLwNk2CD/unsplash-c-O9-jo-Z1-Fd-A.png"
                  alt="user-background"
                />
              </div>
              <div class="icon-add-delete">
                <!-- 新增背景圖 -->
                <input
                  id="image-cover"
                  ref="cover"
                  type="file"
                  name="cover"
                  accept="image/*"
                  class="d-none"
                />
                <div class="add-avatar-box">
                  <img
                    class="add-avatar"
                    src="https://i.postimg.cc/1z1TfSdJ/add-avatar.png"
                    alt="add-avatar"
                  />
                </div>
                <!-- 刪除前一次上傳的圖片 -->
                <div>
                  <img
                    class="delete-img"
                    src="https://i.postimg.cc/XY3tQ4Vm/Vector.png"
                    alt="delete-img"
                  />
                </div>
              </div>
              <div class="avatar-wrapper">
                <input
                  id="image-avatar"
                  ref="avatar"
                  type="file"
                  name="avatar"
                  accept=""
                  class="d-none"
                />
                <div class="black">
                  <!-- 大頭貼 -->
                  <img
                    class="user-avatar"
                    src="https://i.imgur.com/hAKcS3E.jpg"
                    alt="user-avatar"
                  />
                </div>
                <!-- 新增大頭貼圖片 -->
                <img
                  class="add-avatar-user"
                  src="https://i.postimg.cc/1z1TfSdJ/add-avatar.png"
                  alt="add-avatar"
                />
              </div>
            </div>
            <!-- input -->
            <div class="name-introduction">
              <div class="form-field name-field">
                <label for="name">名稱</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="請輸入名稱"
                  required
                />
                <!-- <div class="alert-msg">
                  <span class="msg" v-if="profile.name.length > 50">
                    字數超出上限！
                  </span>
                  <span
                    class="msg"
                    :class="{ blank: profile.name.length > 50 }"
                    v-if="profile.name.trim().length === 0"
                  >
                    名稱不可空白！
                  </span>
                  <span class="number">{{ profile.name.length }}/50</span>
                </div> -->
              </div>
              <div class="form-field introduction-field">
                <label for="introduction">自我介紹</label>
                <textarea
                  id="introduction"
                  name="introduction"
                  type="text"
                  placeholder="請輸入自我介紹"
                />
                <!-- <div class="alert-msg-intro">
                  <span class="msg" v-if="profile.introduction.length > 160"
                    >字數超出上限！</span
                  >
                  <span class="number"
                    >{{ profile.introduction.length }}/160</span
                  >
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProfileBoard",
};
</script>


<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.profile-wrapper {
  width: 639px;
  border: 1px solid #e6ecf0;
  height: 100vh; // 高度維持視窗高度
  overflow-y: scroll; // 產生捲軸
  .prev {
    margin-left: 28px;
    margin-top: 30px;
  }
  .profile-title {
    display: flex;
    height: 75px;
  }
  .name-tweet {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    margin-left: 19px;
    .name {
      color: #171725;
    }
    .tweet-count {
      font-weight: 500;
      font-size: 13px;
      color: #6c757d;
    }
  }
  .bg-img {
    width: 638px;
    height: 200px;
  }
  .user-wrapper {
    position: relative;
    .user-avatar {
      position: absolute;
      width: 141px;
      height: 140px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      top: -76px;
      left: 16px;
    }
    .btn-edit-info {
      width: 128px;
      height: 40px;
      border: 1px solid #ff6600;
      border-radius: 50px;
      background: #ffffff;
      color: #ff6600;
      margin-left: 495px;
      margin-top: 16px;
    }
  }
  .user-info {
    margin-top: 8px;
    margin-left: 16px;
    .account {
      font-weight: 400;
      font-size: 14px;
      color: #6c757d;
    }
    .follow-count {
      display: flex;
    }
    .text {
      margin-top: 6px;
      color: #171725;
    }
    .followed,
    .follow {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      color: #171725;
      margin-top: 8px;
    }
    .follow {
      margin-left: 20px;
    }
    .followe-text {
      color: #6c757d;
    }
  }
}

// modal
.modal-content {
  width: 639px;
  height: 610px;
  .modal-header {
    height: 57px;
    // display: flex;
    // flex-direction:row-reverse;
    .close-btn {
      // outline: 1px solid;
      border: none;
      background: #ffffff;
      .iconX {
        width: 15px;
        height: 15px;
      }
    }
    .modal-title {
      margin-left: -350px;
    }
    .modal-save {
      background: #ff6600;
      color: #e6ecf0;
      border-radius: 50px;
      border: none;
      width: 64px;
      height: 40px;
      margin-top: -6px;
    }
  }
  .background-img {
    width: 638px;
    margin: -17px;
  }
  .icon-add-delete {
    position: absolute;
    display: flex;
    align-items: center;
    top: 90px;
    left: 297px;
    height: 15px;
    .delete-img {
      width: 15px;
      height: 15px;
    }
    .add-avatar {
      width: 20px;
      height: 20px;
    }
    .add-avatar-box {
      width: 40px;
    }
  }
  .user-avatar {
    position: absolute;
    width: 141px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    top: 124px;
    left: 16px;
  }
  .add-avatar-user {
    position: absolute;
    z-index: 1;
    top: 180px;
    left: 77px;
    width: 20px;
  }

  .name-introduction {
    margin: 80px 16px 40px 16px;
    .form-field {
      position: relative;
      width: 100%;
      height: 54px;
      padding: 2px 0px 4px 0px;
      background-color: #f5f8fa;
      border-radius: 2px;
    }
    .form-field.name-field {
      margin-top: 102px;
      margin-bottom: 32px;
    }
    .introduction-field {
      position: relative;
      background-color: #f5f8fa;
      height: 145px;
      textarea {
        height: 122px;
        overflow: hidden;
        resize: none;
      }
    }
    .name-field {
      height: 52px;
    }
    input {
      height: 26px;
    }
    input,
    textarea {
      width: 100%;
      border-color: transparent;
      background-color: transparent;
      border-bottom: 2px solid #657786;
      padding-bottom: 10px;
      padding-left: 9px;
      outline: none;
    }
    input:hover,
    textarea:hover,
    input:focus,
    textarea:focus {
      border-bottom: 2px solid #50b5ff;
    }
    label {
      font-weight: 400;
      font-size: 14px;
      color: #696974;
    }
  }
}
</style>

<script>
import UserAction from "../components/UserAction.vue";
export default {
  components: {
    UserAction,
  },
};
</script>