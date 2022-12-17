<template>
  <Common_header></Common_header>
  <div class="app_content">
    <router-view></router-view>
  </div>
</template>

<script>

import Common_header from "@/components/common_header";

export default {
  name: 'App',
  components: {
    Common_header
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  background-image: url("assets/backbg.jpg");
  background-position: center;
  background-size: cover;
}

.app_content {
  padding-top: 85px;
  height: 706px;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  overflow-x: hidden;
}
</style>
