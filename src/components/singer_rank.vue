<template>
  <div class="singer_rank">
    <div class="left_rank rank_sec">
      <Section_top_row></Section_top_row>
      <Singer_cover_column></Singer_cover_column>
    </div>
    <div class="right_rank rank_sec">
      <Section_top_row></Section_top_row>
      <Singer_cover_column></Singer_cover_column>
    </div>
  </div>
</template>

<script>
import Section_top_row from "@/components/section_top_row";
import Singer_cover_column from "@/components/singer_cover_column";

export default {
  name: "singer_rank",
  components: {Singer_cover_column, Section_top_row}

}
</script>

<style scoped>
.singer_rank {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  margin-bottom: 60px;
}

.rank_sec {
  width: 90%;
  height: 100%;
}
</style>