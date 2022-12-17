<template>
  <div class="playlist">
    <div class="left">
      <div class="cover">
        <div class="img">
          <img src="@/assets/track_cover1.png" alt="playlist cover">
        </div>
      </div>
    </div>
    <div class="right">
      <div class="pl_name">
        Playlist Name
      </div>
      <div class="pl_list">
        <div class="pl_tb">
          <div class="pl_hd">
            <div class="row">
              <div class="pl_hd_cell song">Song</div>
              <div class="pl_hd_cell artist">Artist</div>
              <div class="pl_hd_cell duration">Duration</div>
              <div class="pl_hd_cell like"></div>
            </div>
          </div>
          <div class="content">
            <div class="content_tb">
              <template v-for="i in 10" :key="i">
                <div class="row">
                  <div class="cell cover_content">
                    <div class="track_cover">
                      <img src="" alt="cover">
                    </div>
                  </div>
                  <div class="cell song_content">
                    <div>Song Name</div>
                  </div>
                  <div class="cell artist">
                    <div>Artist Name</div>
                  </div>
                  <div class="cell duration">
                    <div>3:14</div>
                  </div>
                  <div class="cell like">
                    <div @click="change_like">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z"
                            :fill="like === 1? '#D0021B' : '#AAA'" stroke="white" stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="bevel"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="recommender">
    <Section_top_row></Section_top_row>
    <div class="tc_in_row">
      <div class="tc_row">
        <Track_cover_row></Track_cover_row>
      </div>
      <div class="in_row">
        <div class="name">Recommend By</div>
        <div class="value">FPTrack</div>
      </div>
    </div>
  </div>
</template>

<script>
import Section_top_row from "@/components/section_top_row";
import Track_cover_row from "@/components/track_cover_row";
export default {
  name: "playlist_page",
  components: {Track_cover_row, Section_top_row},
  data() {
    return {
      like: 0,
    }
  },
  methods: {
    change_like() {
      if (this.like === 0) this.like = 1
      else this.like = 0
    }
  }
}
</script>

<style scoped>
.cover {
  margin: 30px;
}

.img > img {
  width: 350px;
  height: 350px;
}

.playlist {
  display: flex;
}

.left {
  width: 440px;
}

.right {
  width: 1000px;
}

.pl_name {
  font-weight: 500;
  font-size: 36px;
  line-height: 20px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.right {
  text-align: left;
  margin-top: 130px;
}

.pl_tb {
  width: 100%;
  padding: 30px 10px;
}

.pl_hd {
  width: 100%;
  display: table;
}

.pl_hd_cell {
  display: table-cell;
}

.song {
  width: 50%;
}

.artist {
  width: 20%;
}

.duration {
  width: 20%;
}

.cell.like, .pl_hd_cell.like {
  width: 10%;
}

.song_content {
  width: calc(100% - 70px)
}

.cover_content {
  width: 70px;
}


.row {
  display: table-row;
}

.cell {
  display: table-cell;
  vertical-align: middle;
  padding: 6px 0;
}

.track_cover {
  height: 60px;
  width: 60px;
  background: #D9D9D9;
  overflow: hidden;
}

.pl_list {
  height: 450px;
  overflow: hidden;
}

.content {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
}

.content_tb {
  width: 100%;
  display: table;
}

.recommender {
  position: relative;
  z-index: 99;
}

.tc_in_row {
  /*width: 100%;*/
  display: flex;
  flex-wrap: nowrap;
}

.tc_row {
  flex-shrink: 1;
  width: calc(100% - 425px);
  overflow: hidden;
}

.in_row {
  width: 350px;
  height: 165px;
  padding-left: 25px;
  background: linear-gradient(90deg, #2F88FF 0%, #D0021B 100%);

  position: relative;

  overflow: hidden;
}

.value {
  font-weight: 700;
  font-size: 72px;
  line-height: 42px;

  letter-spacing: -0.07em;

  color: #fff;
  position: absolute;

  bottom: 0;
  right: 5px;
}

.name {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.07em;

  color: #f5f5f5;
  position: absolute;

  top: 0;
  left: 0;
}
</style>