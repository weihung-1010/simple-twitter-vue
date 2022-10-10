<template>
  <div class="main">
    <div class="title">
      <!-- 新增推文 -->
      <h4 class="title-text">首頁</h4>
    </div>
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
              <button type="submit" class="btn-tweet">推文</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="line"></div>
    <!-- 所有推文 -->
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
        <!-- 要跳出 modal -->
        <div class="tweet-reply d-flex">
          <img
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
            class="icon-reoly-heart"
            src="https://i.postimg.cc/brT17wkK/message.png"
          />
          <p class="number">13</p>
        </div>
        <div class="tweet-heart d-flex">
          <img
            class="icon-reoly-heart"
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
  border-right:#e6ecf0 1px solid ;
  border-left:#e6ecf0 1px solid ;
  position: relative;
  left: 338px;
  width: 641px;
  height: 100%;
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
  background: #e6ecf0;
}

//貼文牆
.tweets-wall {
  width: 100%;
  border-bottom: 1px solid #E6ECF0;
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
  width:528px;
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
.icon-reoly-heart {
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
  color: #6C757D;
  padding-left:9.3px;
}
.tweet-heart{
  padding-left:41.3px ;
}
</style>