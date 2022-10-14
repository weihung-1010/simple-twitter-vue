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
            <!-- 使用者頭像（點擊後會連到該用戶的個人資料頁） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
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
      <!-- 推文者頭像 -->
      <div class="user-img">
        <!-- 推文者頭像（點擊後會連到該用戶的個人資料頁） -->
        <router-link to="">
          <img
            class="user-avatar"
            src="https://i.imgur.com/hAKcS3E.jpg"
            alt="user-avatar"
          />
        </router-link>
      </div>

      <div class="tweet-box">
        <!-- 推文資訊 -->
        <div class="tweet-content d-flex">
          <router-link to="">
            <p class="name">Apple</p>
          </router-link>
          <router-link to="">
            <p class="account">@apple</p>
          </router-link>
          <p class="time">‧1個月前</p>
        </div>

        <!-- 推文敘述 -->
        <div class="tweet-text">
          <p>222</p>
        </div>
      </div>

      <div class="tweet-reply-heart d-flex">
        <!-- 留言圖示（點擊後會跳出留言互動視窗） -->
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

        <!-- 愛心圖示（點擊後會加到喜歡的內容） -->
        <div class="tweet-heart d-flex">
          <img
            class="icon-reply-heart"
            src="https://i.postimg.cc/43TQw0Gv/iconLike.png"
          />
          <p class="number">76</p>
        </div>
      </div>
    </div>

    <!-- 留言互動視窗 -->
    <ReplyModal />
  </div>
</template>


<script>
import ReplyModal from "./ReplyModal.vue";
export default {
  name: "TweetsBoard",
  components: { ReplyModal },
};
</script>



<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>