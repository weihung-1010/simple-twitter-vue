<template>
  <ul class="nav-tag">
    <router-link
      :to="{ name: 'main-tweets' }"
      class="tag-link"
      :class="{ 'tag-link-active': $route.name === 'main-tweets' }"
      ><li
        class="tag"
        :class="{ 'tag-selected': $route.name === 'main-tweets' }"
      >
        推文
      </li>
    </router-link>
    <router-link
      :to="{ name: 'replies' }"
      class="tag-link"
      :class="{ 'tag-link-active': $route.name === 'replies' }"
      ><li class="tag" :class="{ 'tag-selected': $route.name === 'replies' }">
        回覆
      </li></router-link
    >
    <router-link
      :to="{ name: 'liked-tweets' }"
      class="tag-link"
      :class="{ 'tag-link-active': $route.name === 'liked-tweets' }"
    >
      <li
        class="tag"
        :class="{ 'tag-selected': $route.name === 'liked-tweets' }"
      >
        喜歡的內容
      </li></router-link
    >
  </ul>
</template>

<script>
export default {
  name: "UserNavTag",
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/userNavTag.scss";
</style>