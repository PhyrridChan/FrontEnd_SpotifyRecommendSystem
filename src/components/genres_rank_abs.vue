<template>
  <div class="genres_abs_sec">
    <div class="left_sec">
      <Section_top_row></Section_top_row>
      <div class="section_content">
        <Genre_rank></Genre_rank>
      </div>
    </div>
    <div class="right_sec">
      <div class="abs_block">
        <Abs_block></Abs_block>
      </div>
    </div>
  </div>
</template>

<script>
import Section_top_row from "@/components/section_top_row";
import Abs_block from "@/components/abs_block";
import Genre_rank from "@/components/genre_rank";

export default {
  name: "genres_rank_abs",
  components: {Genre_rank, Abs_block, Section_top_row}
}
</script>

<style scoped>
.genres_abs_sec {
  display: flex;
}

.left_sec {
  flex-basis: 1000px;
  margin-right: 20px;
}

.right_sec {
  flex-basis: 500px;
}

.section_content {
  width: calc(100% - 45px);
  margin-left: 45px;
}

.abs_block{
  position: relative;
  height: 100%;
}

.genres_abs_sec {
  min-height: 800px;
}
</style>