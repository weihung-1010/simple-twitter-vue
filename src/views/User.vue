<template>
  <div class="container">
    <div class="row">
      <!-- Navbar -->
      <div class="col-2">
        <Navbar />
      </div>

      <!-- Spinner   -->
      <div class="col-7" v-if="isLoading">
        <Spinner />
      </div>

      <!-- User Profile -->
      <div class="col-7" v-else>
        <div class="profile-wrapper">
          <div class="profile-title">
            <router-link class="prev" to="/main">
              <img src="https://i.postimg.cc/T3b8t37Q/Vector.png" />
            </router-link>
            <div class="name-tweet">
              <h5 class="name">{{ targetProfile.name }}</h5>
              <p class="tweet-count">{{ targetProfile.tweetCount }} 推文</p>
            </div>
          </div>

          <!-- 個人簡介 -->
          <UserProfile
            :targetProfile="targetProfile"
            :initialChangeFollow="followShip"
            @change-follow-ship="changeFollowShip"
          />

          <!-- 導覽列標籤 -->
          <UserNavTag />

          <!-- 推文類型分頁 -->
          <!-- <router-view
            :theTweetId="theTweetId"
            @after-click-reply="afterClickReply"
            class="scrollbar bottom-lists"
          /> -->
        </div>
      </div>

      <!-- FollowBoard -->
      <div class="col-2">
        <Followboard @change-profile-follow="changeProfilePopular" />
      </div>

      <!-- Modal -->
      <UserEditModal
        @after-submit-profile="afterSubmitProfile"
        @realtime-change-profile="realtimeChangeProfile"
        :initialTargetProfile="targetProfile"
      />
      <TweetModal />
      <ReplyModal
        @user-after-submit-reply="userAfterSubmitReply"
        :replyModalData="replyModalData"
      />
    </div>
  </div>
</template>




<script>
import Navbar from "../components/Navbar.vue";
import UserProfile from "../components/UserProfile.vue";
import UserNavTag from "../components/UserNavTag.vue";
import Followboard from "../components/Followboard.vue";
import UserEditModal from "../components/UserEditModal.vue";
import TweetModal from "../components/TweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import Spinner from "./../components/Spinner.vue";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import userAPI from "./../apis/user";

export default {
  name: "User",
  components: {
    Navbar,
    UserProfile,
    UserNavTag,
    Followboard,
    UserEditModal,
    ReplyModal,
    TweetModal,
    Spinner,
  },
  computed: {
    ...mapState(["currentUser", "topPopular"]),
  },
  data() {
    return {
      targetProfile: {
        id: -1,
        account: "",
        email: "",
        name: "",
        avatar: "",
        cover: "",
        introduction: "",
        role: "",
      },
      replyModalData: {},
      followingList: [],
      followShip: false,
      isLoading: true,
      theTweetId: -1,
      newProfile: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 監聽路由
    const { id } = to.params;
    this.fetchProfile(id);
    this.fetchFollowings(this.currentUser.id);
    next();
  },
  created() {
    //透過 id 取得指定使用者的資料
    const { id } = this.$route.params;
    this.fetchProfile(id);
    this.$store.dispatch("fetchPopular");
    this.fetchFollowings(this.currentUser.id);
  },
  methods: {
    async fetchProfile(userId) {
      try {
        this.isLoading = true;
        const response = await userAPI.getTheUser(userId);
        if (response.statusText !== "OK") {
          throw new Error("無法取得使用者資料，請稍後再試");
        }
        const {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
          tweetCount,
        } = {
          id: response.data.id,
          account: response.data.account,
          email: response.data.email,
          name: response.data.name,
          avatar: response.data.avatar,
          cover: response.data.cover,
          introduction: !response.data.introduction
            ? ""
            : response.data.introduction,
          role: response.data.role,
          followerCount: response.data.followerCount,
          followingCount: response.data.followingCount,
          tweetCount: response.data.tweetCount,
        };
        this.targetProfile = {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followerCount,
          followingCount,
          tweetCount,
        };
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    afterClickReply(payload) {
      // 點擊回覆，顯示 modal 使用的資料
      const { id, avatar, name, account, createdAt, description } = payload;
      this.replyModalData = {
        id, // tweetID
        avatar,
        name,
        account,
        createdAt,
        description,
      };
    },
    userAfterSubmitReply(id) {
      this.theTweetId = id;
    },
    async afterSubmitProfile(formData) {
      try {
        const response = await userAPI.updateProfile({
          userId: this.currentUser.id,
          formData,
        });
        if (response.statusText !== "OK") {
          throw new Error("無法編輯個人資料，請稍後再試");
        }
        const { name, avatar, cover, introduction } = {
          name: this.newProfile.name,
          avatar: this.newProfile.avatar,
          cover: this.newProfile.cover,
          introduction: this.newProfile.introduction,
        };
        this.targetProfile = {
          ...this.targetProfile,
          name,
          avatar,
          cover,
          introduction,
        };
        Toast.fire({
          icon: "success",
          title: "個人資料編輯成功",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法編輯個人資料，請稍後再試",
        });
      }
    },
    // 由於 API 沒有回傳資料，因此利用時間差的方式
    // 先儲存 newProfile 資料，再透過 afterSubmitProfile() 去即時更新 profile
    realtimeChangeProfile(profile) {
      this.newProfile = profile;
      console.log("submitted newProfile is:", this.newProfile);
    },

    async fetchFollowings(userId) {
      // 這邊為了個人頁面的追蹤按鈕
      try {
        const response = await userAPI.getFollowings(userId);
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followingList = data;
        const followingShip = this.followingList.find(
          (following) => following.followingId === Number(this.$route.params.id)
        );
        this.followShip = !!followingShip; //可以判斷 true 正在追蹤，傳到 UserProfileCard 使用
      } catch (error) {
        console.error(error.message);
      }
    },
    changeProfilePopular(change) {
      // 個人頁面的追蹤按鈕
      // popular 傳回來的 change 物件包含 id 和 改變狀態 true or false
      const userId = change.userId;
      const { id } = this.$route.params;
      // 如果目前是在別人的個人頁面: 如果popular改動的追蹤按鈕使用者id跟當前個人頁面id相符合, 才改變按鈕狀態
      if (userId === Number(id)) {
        this.followShip = change.change;
        // 改變user profile頁面的跟隨中與跟隨者人數
        if (this.followShip === true) {
          this.targetProfile = {
            ...this.targetProfile,
            followerCount: this.targetProfile.followerCount + 1,
          };
        } else if (this.followShip === false) {
          this.targetProfile = {
            ...this.targetProfile,
            followerCount: this.targetProfile.followerCount - 1,
          };
        }
        // 如果是在自己的個人頁面: 追蹤中人數相應改變
      } else if (userId !== Number(id) && Number(id) === this.currentUser.id) {
        if (change.change === true) {
          this.targetProfile = {
            ...this.targetProfile,
            followingCount: this.targetProfile.followingCount + 1,
          };
        } else if (change.change === false) {
          this.targetProfile = {
            ...this.targetProfile,
            followingCount: this.targetProfile.followingCount - 1,
          };
        }
      }
    },
    changeFollowShip(payload) {
      this.followShip = payload;
      // 在"別人"的個人頁面按下追蹤或退追按鈕, 下方的追隨者人數會相應變化
      if (this.followShip === true) {
        this.targetProfile = {
          ...this.targetProfile,
          followerCount: this.targetProfile.followerCount + 1,
        };
      } else if (this.followShip === false) {
        this.targetProfile = {
          ...this.targetProfile,
          followerCount: this.targetProfile.followerCount - 1,
        };
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "./../assets/scss/profileBoard.scss";
@import "./../assets/scss/userNavTag.scss";
</style>