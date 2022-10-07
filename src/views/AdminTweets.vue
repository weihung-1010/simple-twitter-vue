
<template>
  <div>
    <h1>Admin Tweets Page</h1>
    <AdminTweetsList />
  </div>
</template>


<script>
import AdminTweetsList from "./../components/AdminTweetsList.vue";

export default {
  name: "AdminTweets",
  components: {
    AdminTweetsList,
  },
};
</script>