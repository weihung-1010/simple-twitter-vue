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
      <button class="btn-edit-info">編輯個人資料</button>
    </div>
    <div class="user-info">
      <h5 class="name">John Doe</h5>
      <p class="account">@heyjohn</p>
      <p class="text">個人簡介</p>
      <div class="follow-count">
        <router-link class="followed" to="">34個
          <p class="followe-text">跟隨中</p>
        </router-link>
        <router-link class="follow" to="">59位
          <p class="followe-text">跟隨者</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.profile-wrapper {
  width: 639px;
  margin-left: 343px;
  border: 1px solid #e6ecf0;
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
    .text{
      margin-top:6px ;
      color: #171725;
    }
    .followed,
    .follow {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      color: #171725;
      margin-top:8px ;
    }
    .follow{
      margin-left: 20px;
    }
    .followe-text{
      color: #6C757D;
    }
  }
}
</style>