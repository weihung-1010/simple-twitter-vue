<template>
  <div class="user-page d-flex">
    <!-- Navbar -->
    <Navbar />
    <!-- Tweetsboard -->
    <Tweetsboard />
    <!-- Followboard -->
    <Followboard/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Tweetsboard from "../components/Tweetsboard.vue";
import Followboard from "../components/Followboard.vue"
export default {
  components: {
    Navbar,
    Tweetsboard,
    Followboard
  },
};
</script>