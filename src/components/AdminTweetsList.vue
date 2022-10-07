<template>
  <div class="tweets-list">
    <div class="list-title">
      <h4>推文清單</h4>
    </div>
    //測試濾鏡功能
    <img class="avatar" :src="currentUser.avatar | emptyImage" alt="avatar" />
    <div>{{ createdAt | fromNow }}</div>
  </div>
</template>


<script>
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "user1",
    email: "user1@example.com",
    avatar: "",
    isAdmin: false,
  },
  isAuthenticated: true,
};
export default {
  mixins: [fromNowFilter, emptyImageFilter],
  data() {
    return {
      currentUser: dummyUser.currentUser,
      createdAt: "2019-06-07T13:28:51.000Z",
    };
  },
};
</script>
