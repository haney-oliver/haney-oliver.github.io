<template>
  <div class="navbar">
    <span class="title">SECURE SUITE</span>
    <ul class="options">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/quickstart">Quickstart</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/navbar.scss";
</style>
