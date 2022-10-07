<template>
  <div class="user-page d-flex">
    <!-- Navbar -->
    <Navbar />
    <!-- Tweetsboard -->
    <Tweetsboard />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Tweetsboard from "../components/Tweetsboard.vue";
export default {
  components: {
    Navbar,
    Tweetsboard,
  },
};
</script>