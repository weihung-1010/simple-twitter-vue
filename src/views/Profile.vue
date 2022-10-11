<template>
  <div class="container">
    <div class="row">
      <!-- Navbar -->
      <div class="col">
        <Navbar />
      </div>
      <!-- ProfileBoard -->
      <div class="col-7">
        <ProfileBoard />
      </div>
      <!-- FollowBoard -->
      <div class="co-2">
        
          <FollowBoard />
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .followboard{
  margin-left:-340px;
} */
</style>

<script>
import Navbar from "../components/Navbar.vue";
import ProfileBoard from "../components/Profileboard.vue";
import FollowBoard from "../components/Followboard.vue";
export default {
  components: {
    Navbar,
    ProfileBoard,
    FollowBoard,
  },
};
</script>