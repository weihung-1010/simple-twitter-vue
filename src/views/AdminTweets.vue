
<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <Navbar />
      </div>

      <div class="col-10" v-if="isLoading">
        <h4 class="list-title">推文清單</h4>
        <Spinner />
      </div>

      <div class="col-10" v-else>
        <h4 class="list-title">推文清單</h4>
        <div class="list-container">
          <AdminTweetsList
            :initial-tweets="tweets"
            @after-delete-tweet="afterDeleteTweet"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "./../components/Navbar.vue";
import AdminTweetsList from "./../components/AdminTweetsList.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "AdminTweets",
  components: {
    Navbar,
    AdminTweetsList,
    Spinner,
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
    };
  },
  created() {
    // 載入頁面時取得推文清單
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        // 在取得資料前，讓 spinner 出現
        this.isLoading = true;

        // 向 API 請求所有推文資料
        const { data } = await adminAPI.tweets.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 將 API 回傳的推文陣列存在 tweets 中
        this.tweets = data;
        console.log("tweets array is: ", this.tweets);
        // 成功取得資料後，讓 spinner 消失
        this.isLoading = false;
      } catch (error) {
        // 確定無法資料後，讓 spinner 消失
        this.isLoading = false;

        // 報錯
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文清單，請稍後再試",
        });
      }
    },

    // 刪除其中一篇推文
    afterDeleteTweet(tweetId) {
      // 將要刪除的推文過濾掉
      this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/admin.scss";
</style>