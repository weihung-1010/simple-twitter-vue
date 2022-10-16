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
            <!-- 待新增 router-link：目前使用者的個人資料頁  -->
            <router-link to="">
              <img
                class="user-avatar"
                :src="currentUser.avatar | emptyImage"
                alt="user-avatar"
              />
            </router-link>

            <textarea
              v-model="description"
              type="text"
              placeholder="有什麼新鮮事？"
            />

            <div class="input-footer">
              <div class="footer-wrapper">
                <div class="modal-error">
                  <!-- 字數限制 -->
                  <span v-if="description.length > 140" class="alert-error">
                    字數不可超過140字
                  </span>

                  <!-- 空白限制 -->
                  <span
                    class="alert-error"
                    v-if="description && description.trim().length === 0"
                    >內容不可空白</span
                  >
                </div>

                <!-- 送出按鈕 -->
                <button type="submit" class="btn-tweet btn-info btn">
                  推文
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="line"></div>

    <TweetsWall @after-click-reply="afterClickReply" :initialTweets="tweets" />
  </div>
</template>


<script>
import TweetsWall from "../components/TweetsWall.vue";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets";
import { mapState } from "vuex";
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "MainPage",
  mixins: [emptyImageFilter],
  components: {
    TweetsWall,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
    theTweetId: {
      type: Number,
      default: () => ({
        theTweetId: -1,
      }),
    },
  },
  data() {
    return {
      tweets: [],
      description: "",
    };
  },
  watch: {
    initialTweets(newValue) {
      this.tweets = [...newValue];
    },
    theTweetId(newVal) {
      this.addCommentCount(newVal);
    },
  },
  created() {
    this.tweets = this.initialTweets;
  },
  methods: {
    async handleSubmit() {
      try {
        // 先判斷有無超過字數
        if (this.description.length > 140) {
          Toast.fire({
            icon: "warning",
            title: "字數不可超過 140 字",
          });
          return;
        }
        // 若沒超過，刪掉空白後再檢查一次
        this.description = this.description.trim();
        if (!this.description) {
          Toast.fire({
            icon: "warning",
            title: "內容不可空白",
          });
          return;
        }

        // 向 API 請求建立新推文並接受回傳的資料
        const { data } = await tweetsAPI.tweets.create({
          description: this.description,
        });


        if (data.status === "error") {
          throw new Error(data.message);
        }

        // 新的推文資料放入陣列第一筆
        this.tweets.unshift({
          id: data.data.Id,
          UserId: data.data.id,
          description: data.data.description,
          account: this.currentUser.account,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
          createdAt: data.data.createdAt,
          likeCount: 0,
          commentCount: 0,
          isLike: false,
        });

        // 將發推區內的文字清空
        this.description = "";

        // 跳出通知
        Toast.fire({
          icon: "success",
          title: "推文成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "推文失敗，請稍後再試",
        });
      }
    },
    addCommentCount(id) {
      this.tweets = this.tweets.map((tweet) => {
        return tweet.id === id
          ? { ...tweet, commentCount: tweet.commentCount + 1 }
          : tweet;
      });
    },
    afterClickReply(payload) {
      // 被點擊的那則留言的資料，繼續傳到父層 Main.vue
      this.$emit("after-click-reply", payload);
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/tweetsBoard.scss";
</style>