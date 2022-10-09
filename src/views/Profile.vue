<template>
  <div class="user-page d-flex">
    <!-- Navbar -->
    <Navbar/>
    <!-- ProfileBoard -->
    <ProfileBoard/>
    <!-- FollowBoard -->
    <div class="followboard">
    <FollowBoard/>
    </div>
  </div>
</template>

<style scoped>
.followboard{
  margin-left:-340px;
}
</style>

<script>
import Navbar from '../components/Navbar.vue'
import ProfileBoard from '../components/Profileboard.vue'
import FollowBoard from '../components/Followboard.vue'
export default {
  components:{
    Navbar,
    ProfileBoard,
    FollowBoard
  }
}
</script>