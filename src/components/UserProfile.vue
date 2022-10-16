<template>
  <div class="user-profile-outer">
    <img
      class="background-img"
      :src="targetProfile.cover | emptyCover"
      alt="user-background"
    />
    <!--  -->
    <div class="user-avatar">
      <img
        :src="targetProfile.avatar | emptyImage"
        alt="user-avatar"
        class="avatar"
      />
    </div>
    <button
      v-if="Number($route.params.id) === currentUser.id"
      class="user-edit"
      data-toggle="modal"
      data-target="#user-edit"
    >
      編輯個人資料
    </button>
    <div
      v-else-if="Number($route.params.id) !== currentUser.id"
      class="btn-icon"
    >
      <img
        src="~@/assets/images/messageIcon.png"
        alt="message-btn"
        class="message-btn"
      />
      <img src="~@/assets/images/notfi.png" alt="bell-btn" class="bell-btn" />
      <button
        @click.stop.prevent="addFollowed(targetProfile.id)"
        v-if="!this.initialChangeFollow"
        class="handle-follow btn-unfollow"
      >
        跟隨
      </button>
      <button
        @click.stop.prevent="deleteFollowed(targetProfile.id)"
        v-if="this.initialChangeFollow"
        class="handle-follow btn-follow"
      >
        正在跟隨
      </button>
    </div>
    <div class="user-title">
      <div class="name">{{ targetProfile.name }}</div>
      <div class="account">@{{ targetProfile.account }}</div>
    </div>
    <p class="user-text">
      {{ targetProfile.introduction }}
    </p>
    <div class="follow">
      <router-link :to="{ name: 'user-followings' }" class="following">
        <div class="follow-count">{{ targetProfile.followingCount }} 個</div>
        <div class="follow-text">跟隨中</div>
      </router-link>
      <router-link :to="{ name: 'user-followers' }" class="follower">
        <div class="follow-count">{{ targetProfile.followerCount }} 位</div>
        <div class="follow-text">跟隨者</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import userAPI from "./../apis/user";
import { emptyImageFilter, emptyCoverFilter } from "./../utils/mixins";

export default {
  name: "UserProfile",
  mixins: [emptyImageFilter, emptyCoverFilter],
  props: {
    targetProfile: {
      type: Object,
      require: true,
    },
    initialChangeFollow: {
      type: Boolean,
      require: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      followingList: [],
      followShip: false,
    };
  },
  watch: {
    initialChangeFollow(newVal) {
      this.followShip = newVal;
    },
  },
  methods: {
    async fetchFollowings() {
      //追蹤功能需使用的資料
      try {
        const response = await userAPI.getFollowings({
          userId: this.$route.params.id,
        });
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        this.followingList = data;
      } catch (error) {
        console.error(error.message);
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await userAPI.addFollowed({ id: userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.followingList = this.followingList.map((following) => {
          return userId === following.followId
            ? {
                ...following,
                isFollowing: !following.isFollowing,
              }
            : following;
        });
        this.$emit("change-follow-ship", true);
        this.$store.dispatch("fetchPopular");
        Toast.fire({
          icon: "success",
          title: "成功追蹤該使用者",
        });
      } catch (error) {
        console.error(error.message);
        if (error.message === "Can not follow yourself.") {
          Toast.fire({
            icon: "warning",
            title: "不能追蹤自己唷！",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "無法追蹤該使用者，請稍後再試",
          });
        }
      }
    },
    async deleteFollowed(userId) {
      try {
        const { data } = await userAPI.deleteFollowed({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.followingList = this.followingList.map((following) => {
          return userId === following.followId
            ? {
                ...following,
                isFollowing: !following.isFollowing,
              }
            : following;
        });
        this.$emit("change-follow-ship", false);
        this.$store.dispatch("fetchPopular");
        Toast.fire({
          icon: "success",
          title: "已取消追蹤該使用者",
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤該使用者，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/setups.scss";

.user-profile-outer {
  position: relative;
  height: calc(409px + 10%);
  overflow-wrap: anywhere;
  border-left: #e6ecf0 1px solid;
  border-right: #e6ecf0 1px solid;
  .background-img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 200px;
  }
  .user-avatar {
    position: absolute;
    top: 124px;
    left: 16px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px $white solid;
    .avatar {
      object-fit: cover;
      object-position: center;
      width: 132px;
      height: 132px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .user-edit {
    height: 40px;
    background: white;
    color: $logo-color;
    border-radius: 50px;
    border: 1px $logo-color solid;
    position: absolute;
    top: 216px;
    right: 16px;
    width: 128px;
  }

  .btn-icon {
    display: flex;
    position: absolute;
    top: 216px;
    right: 16px;
    widows: 100%;
    .message-btn,
    .bell-btn {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    .message-btn,
    .bell-btn,
    .handle-follow {
      margin: 0 0 0 16px;
    }

    .btn-follow {
      height: 40px;
      background: $logo-color;
      color: white;
      border-radius: 50px;
      width: 96px;
    }
    .btn-unfollow {
      height: 40px;
      background: white;
      color: $logo-color;
      border-radius: 50px;
      border: 1px $logo-color solid;
      width: 64px;
    }
  }

  .user-title {
    margin: 72px 0 0 16px;
    .name {
      font-size: 18px;
      font-weight: 700;
    }
    .account {
      font-size: 14px;
      color: $secondary-color;
    }
  }
  .user-text {
    margin: 6px 17px 0 16px;
    font-size: 14px;
  }
  .follow {
    display: flex;
    margin: 8px 0 0 16px;
    font-size: 14px;

    .following,
    .follower {
      display: flex;
      .follow-text {
        color: $secondary-color;
      }
      .follow-count {
        color: black;
      }
    }
    .following:hover,
    .follower:hover {
      text-decoration: underline;
    }
    .follower {
      margin: 0 0 0 20px;
    }
  }
}
</style>