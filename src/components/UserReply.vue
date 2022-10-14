<template>
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

      <div class="reply-wrapper d-flex">
        <p class="reply">回覆</p>
        <router-link to="">
          <p class="reply-account">@apple</p>
        </router-link>
      </div>

      <div class="tweet-text">
        <p>222</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserReply",
};
</script>



<style scoped lang="scss">
@import "../assets/scss/setups.scss";

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
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
  top: -32px;
}
.reply-wrapper {
  position: relative;
  bottom: 38px;
  left: 82px;
}
.reply,
.reply-account {
  font-weight: 400;
  font-size: 14px;
  color: #6c757d;
}
.reply-account {
  padding-left: 5px;
}
</style>