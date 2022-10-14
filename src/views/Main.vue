<template>
  <div class="container">
    <!-- Navbar -->
    <div class="row">
      <div class="col-2">
        <Navbar />
      </div>
      <!-- Tweetsboard -->
      <div class="col-7">
        <Tweetsboard />
      </div>
      <div class="col-3">
        <!-- Followboard -->
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
  components: {
    Navbar,
    Tweetsboard,
    Followboard,
  },
};
</script>