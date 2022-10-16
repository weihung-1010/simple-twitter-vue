<template>
  <div class="followboard-wrapper">
    <div class="followboard-title">
      <h4>推薦跟隨</h4>
    </div>
    <div class="list-wrapper">
      <div class="followboard-lists" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user-tweet', params: { id: user.id } }">
          <img
            class="user-avatar"
            :src="user.avatar || 'https://i.imgur.com/hAKcS3E.jpg'"
            alt="user-avatar"
          />
        </router-link>

        <div class="right-content d-flex">
          <div class="name-account">
            <p class="name">{{ user.name }}</p>
            <p class="account">@{{ user.account }}</p>
          </div>

          <button
            class="btn-follow btn-info"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowed"
          >
            正在跟隨
          </button>
          <button
            class="btn-unfollow btn-info"
            v-else
            @click.stop.prevent="addFollowed"
          >
            跟隨
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/setups.scss";
.followboard-wrapper {
  position: fixed; // 固定在右邊
  height: 70vh; // 高度維持在視窗高度
  overflow-y: scroll; // 產生捲軸
  width: 273px;
  margin-top: 16px;
  background: #fafafb;
  border-radius: 16px;
  &::-webkit-scrollbar {
    width: 1px;
  }
  .followboard-title {
    z-index: 999;
    position: fixed;
    background: #fafafb;
    border-radius: 16px 16px 0 0;
    height: 74px;
    width: 271px;
    border-bottom: 1px solid #e6ecf0;
    h4 {
      padding: 24px;
    }
  }
  .list-wrapper {
    margin-top: 74px;
  }
  .followboard-lists {
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: $dark-40-color;
    }
  }
  .user-avatar {
    margin: 16px 8px 16px 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .right-content {
    width: 170px;
    justify-content: space-between;
  }
  .name-account {
    width: 0%;
    display: flex;
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
    left: -28px;
    pointer-events: none;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    color: #171725;
    // 多餘文字省略隱藏
    width: 84px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .account {
    font-weight: 400;
    font-size: 14px;
    color: #6c757d;
  }
  .btn-follow {
    position: relative;
    width: 96px;
    height: 40px;
    background: #ff6600;
    border-radius: 50px;
    color: #ffffff;
    border: none;
    top: 21px;
    right: 16px;
  }
  .btn-unfollow {
    position: relative;
    background: #ffffff;
    border: 1px solid #ff6600;
    border-radius: 50px;
    width: 64px;
    height: 40px;
    color: #ff6600;
    top: 21px;
    right: 16px;
  }
}
</style>

<script>
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/user";
import { mapState } from "vuex";

export default {
  name: "FollowBoard",
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      users: [],
      isLoading: true,
      isProcessing: false,
      isFollowed:'',
    };
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        console.log(data);
        this.users = data.map((user) => ({
          id: user.id,
          name: user.name,
          account: user.account,
          avatar: user.avatar,
          followerCount: user.followerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得人氣使用者，請稍後再試",
        });
      }
    },
    addFollowed() {
      this.users = {
        ...this.users,
        isFollowed: true,
      };
      console.log(this.user)
    },
    deleteFollowed() {
      this.users = {
        ...this.users,
        isFollowed: false,
      };
    },
  },
  created() {
    this.fetchTopUsers();
  },
};
</script>