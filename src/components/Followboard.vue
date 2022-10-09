<template>
  <div class="followboard-wrapper">
    <div class="followboard-title">
      <h4>推薦跟隨</h4>
    </div>
    <div class="followboard-lists">
      <router-link to="">
        <img
          class="user-avatar"
          src="https://i.imgur.com/hAKcS3E.jpg"
          alt="user-avatar"
        />
      </router-link>
      <div class="name-account">
        <p class="name">user1</p>
        <p class="account">@uesr1</p>
      </div>
      <button class="btn-follow ">正在跟隨</button>
      <button class="btn-unfollow ">跟隨</button>
    </div>
<!-- 串接API時刪除 -->
    <div class="followboard-lists">
      <router-link to="">
        <img
          class="user-avatar"
          src="https://i.imgur.com/hAKcS3E.jpg"
          alt="user-avatar"
        />
      </router-link>
      <div class="name-account">
        <p class="name">user1</p>
        <p class="account">@uesr1</p>
      </div>
      <button class="btn-follow ">正在跟隨</button>
      <button class="btn-unfollow ">跟隨</button>
    </div>

    <div class="followboard-lists">
      <router-link to="">
        <img
          class="user-avatar"
          src="https://i.imgur.com/hAKcS3E.jpg"
          alt="user-avatar"
        />
      </router-link>
      <div class="name-account">
        <p class="name">user1</p>
        <p class="account">@uesr1</p>
      </div>
      <button class="btn-follow ">正在跟隨</button>
      <button class="btn-unfollow ">跟隨</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.followboard-wrapper {
  width: 273px;
  height: 100%;
  margin-left: 360px;
  margin-top: 16px;
  background: #fafafb;
  border-radius: 16px;
  .followboard-title {
    height: 74px;
    background: #fafafb;
    h4 {
      padding: 24px;
      border-bottom: 1px solid #e6ecf0;
    }
  }
  .followboard-lists {
    display: flex;
    justify-content: space-between;
  }
  .user-avatar {
    margin: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .name-account {
    width: 0%;
    display: flex;
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
    left: -54px;
    pointer-events: none;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    color: #171725;
  }
  .account {
    font-weight: 400;
    font-size: 14px;
    color: #6c757d;
  }
  .btn-follow {
    position: relative;
    width: 96px;
    height: 40px;
    background: #ff6600;
    border-radius: 50px;
    color: #ffffff;
    border: none;
    top: 21px;
    right: 13px;
  }
  .btn-unfollow {
    position: relative;
    background: #ffffff;
    border: 1px solid #ff6600;
    border-radius: 50px;
    width: 64px;
    height: 40px;
    color: #ff6600;
    top: 21px;
    right: 13px;
    display: none;
  }
}
</style>