<template>
  <Listen_now></Listen_now>
  <Section_title></Section_title>
  <Section_top_row></Section_top_row>
  <Track_cover_row></Track_cover_row>

  <Section_top_row></Section_top_row>
  <Track_cover_row></Track_cover_row>

  <Singer_rank></Singer_rank>

  <Genres_rank_abs></Genres_rank_abs>
</template>

<script>
import Genres_rank_abs from "@/components/genres_rank_abs";
import Singer_rank from "@/components/singer_rank";
import Track_cover_row from "@/components/track_cover_row";
import Section_top_row from "@/components/section_top_row";
import Section_title from "@/components/section_title";
import Listen_now from "@/components/listen_now";

export default {
  name: "main_page",
  components: {
    Genres_rank_abs,
    Singer_rank,
    Track_cover_row,
    Section_top_row,
    Section_title,
    Listen_now,
  }
}
</script>

<style scoped>

</style>