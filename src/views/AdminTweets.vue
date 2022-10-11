
<template>
  <div>
    <Navbar />
    <Spinner v-if="isLoading" />
    <AdminTweetsList v-else :initial-tweets="tweets" />
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
        const { data } = await adminAPI.tweets.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 將 API 回傳的推文陣列存在 tweets 中
        this.tweets = data;
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
    // // 刪除tweet
    // afterTweetDelete(tweetId) {
    //   // 過濾掉要刪除的tweet
    //   this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    // },
  },
};
</script>