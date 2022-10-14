<template>
  <div class="container">
    <!-- Navbar -->
    <div class="row">
      <div class="col-2">
        <Navbar />
      </div>
      <!-- Tweets board -->
      <div class="col-7">
        <Tweetsboard />
      </div>
      <div class="col-3">
        <!-- Follow board -->
        <Followboard />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Tweetsboard from "../components/Tweetsboard.vue";
import Followboard from "../components/Followboard.vue";
export default {
  name: "Main",
  components: {
    Navbar,
    Tweetsboard,
    Followboard,
  },
};
</script>