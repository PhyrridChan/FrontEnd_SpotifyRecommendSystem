<template>
  <div class="cover_row">
    <div class="scroll_container">
      <template v-for="i in 5" :key="i">
        <div class="cover_card">
          <div class="cover_img song_1">
            <div class="img_c"></div>
          </div>
          <div class="cover_title">
            <div class="main_name">Memories</div>
            <div class="sub_name">Conan Gray</div>
          </div>
        </div>
        <div class="cover_card">
          <div class="cover_img song_2">
            <div class="img_c"></div>
          </div>
          <div class="cover_title">
            <div class="main_name">Memories</div>
            <div class="sub_name">Conan Gray</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "track_cover_row"
}
</script>

<style scoped>
.cover_row {
  width: calc(100% - 45px);
  padding-left: 45px;
  margin-bottom: 80px;
}

.cover_img {
  width: 165px;
  height: 165px;

  transition: .4s ease-in-out;
  cursor: pointer;
}

.cover_img:hover {
  transform: scale(1.02);
}

.img_c {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.cover_img.song_1  > .img_c {
  background-image: url("@/assets/track_cover1.png");
}
.cover_img.song_2  > .img_c {
  background-image: url("@/assets/track_cover2.png");
}


.cover_title {
  text-align: left;
  margin-top: 2px;
}

.main_name {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.sub_name {
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.cover_card {
  margin-right: 45px;
}

.scroll_container {
  width: 1395px;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow-y: hidden;

  display: flex;
}
</style>