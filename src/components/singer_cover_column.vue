<template>
  <div class="rank_column">
    <template v-for="i in 3" :key="i">
      <div class="rank_card singer1">
        <div class="cover_with_rank">
          <div class="cover">
            <div class="cover_img">
              <div class="img_cover"></div>
            </div>
          </div>
          <div class="rank">{{ 2 * i - 1 }}</div>
          <div class="cover_name">Justin Bieber</div>
        </div>
        <div class="rank_info">
          <div class="top_info info_row">
            <div class="info_name">Followers</div>
            <div class="info_value">100</div>
          </div>
          <div class="bottom_info info_row">
            <div class="info_name">Music Genres</div>
            <div class="info_value">
              <div>canadian pop</div>
              <div>pop</div>
              <div>post-teen pop</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rank_card singer2">
        <div class="cover_with_rank">
          <div class="cover">
            <div class="cover_img">
              <div class="img_cover"></div>
            </div>
          </div>
          <div class="rank">{{ 2 * i }}</div>
          <div class="cover_name">Justin Bieber</div>
        </div>
        <div class="rank_info">
          <div class="top_info info_row">
            <div class="info_name">Followers</div>
            <div class="info_value">100</div>
          </div>
          <div class="bottom_info info_row">
            <div class="info_name">Music Genres</div>
            <div class="info_value">
              <div>canadian pop</div>
              <div>pop</div>
              <div>post-teen pop</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "singer_cover_column"
}
</script>

<style scoped>
.rank_column {
  margin: 10px 45px;
  text-align: left;
}

.img_cover {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.cover_img {
  width: 100px;
  height: 100px;
  border: 100px;
  overflow: hidden;
}

.rank_info {
  display: table;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
  width: 100%;

  flex-grow: 1;
  margin: 0 25px;
}

.info_row {
  display: table-row;
}

.top_info > .info_value, .top_info > .info_name {
  border-bottom: 2px solid #FFFFFF;
  padding-bottom: 5px;
}

.bottom_info > .info_value, .bottom_info > .info_name {
  padding-top: 15px;
}

.info_name {
  display: table-cell;
  padding-right: 40px;
  width: 120px;
}

.info_value {
  display: table-cell;
  letter-spacing: 0;
}

.rank_card {
  display: flex;
  margin-bottom: 50px;
}

.cover {
  width: 145px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.singer1 .img_cover {
  background-image: url("@/assets/singer1.png");
}

.singer2 .img_cover {
  background-image: url("@/assets/singer2.png");
}

.singer1 .cover {
  background: radial-gradient(50% 50% at 50% 50%, #064B99 0%, #010054 100%);
}

.singer2 .cover {
  background: radial-gradient(50% 50% at 50% 50%, #F6D3B8 0%, #FEBF3C 100%);
}

.cover_img {
  margin: 0 auto;
}

.rank {
  font-weight: 900;
  font-size: 128px;
  line-height: 100px;

  color: #fff;

  position: absolute;
  left: -10px;
  bottom: 0;

  font-family: 'Zilla Slab Highlight',serif;

}

.cover_with_rank {
  position: relative;
  padding-left: 20px;
}

.cover_name {
  text-align: right;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}
</style>