<template>
  <div class="main">
    <div class="title">
      <h4 class="title-text">首頁</h4>
    </div>
    <form @submit.stop.prevent="handleSubmit">
      <div class="main-wrapper">
        <div class="tweet-wrapper">
          <div class="avatar-input d-flex">
            <router-link to="#">
              <img
                class="user-avatar"
                src="https://i.imgur.com/hAKcS3E.jpg"
                alt="user-avatar"
              />
            </router-link>
            <textarea type="text" placeholder="有什麼新鮮事？" />
            <div class="input-footer">
              <button type="submit" class="btn-tweet">推文</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.main {
  outline: #e6ecf0 1px solid;
  position: relative;
  left: 338px;
  width: 641px;
}
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
  margin: 0 8px 0 0;
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
  left: 70px;
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
  background: #E6ECF0;;
}
</style>