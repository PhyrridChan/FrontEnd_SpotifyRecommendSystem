<template>
  <div ref="mount_out" class="mount_out">
    <slot name="out"></slot>
  </div>
  <div class="page_cover" ref="page_cover" id="page_cover"></div>
</template>

<script>
export default {
  name: "mount_out",
  mounted() {
    document.querySelector("#app").appendChild(
        this.$refs.page_cover
    )
    document.querySelector("#app").appendChild(
        this.$refs.mount_out
    )
  }
}
</script>

<style scoped>
.mount_out {
  position: fixed;
  top: 0;

  width: 100%;
  z-index: 999;

  pointer-events: none;
}

.page_cover {
  height: 100%;
  width: 100%;

  z-index: -1;
  position: fixed;
  top: 0;

  background: rgba(0, 0, 0, 0.6);
}
</style>