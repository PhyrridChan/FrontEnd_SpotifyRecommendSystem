<template>
  <div class="player">
    <div class="play">
      <div class="cover">
        <img src="@/assets/track_cover1.png" alt="cover_img">
      </div>
      <div class="info">
        <div class="song_name">Memories</div>
        <div class="artist_nam">Conan Gray</div>
      </div>
      <div class="song_func">
        <div class="like" @click="change_like">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z"
                :fill="like === 1? '#D0021B' : '#AAA'" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="bevel"/>
          </svg>
        </div>
        <div class="add_to_pl" @click="change_pl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z"
                :fill="list === 1 ? '#2F88FF' : '#AAA'" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
            <path d="M8 12L11 15L17 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
          </svg>
        </div>
      </div>
      <div class="play_processor">
        <div id="ins-time"></div>
        <div id="shadow-hover"></div>
        <div id="seek-bar"></div>
      </div>
      <div class="pn">
        <div class="pn_button">
          <div class="pre">
            <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M18.9524 13.229L36.6153 23.4265C36.7771 23.5199 36.9606 23.5691 37.1474 23.5691C37.3342 23.5691 37.5177 23.5199 37.6795 23.4265C37.8412 23.3331 37.9755 23.1987 38.0689 23.0369C38.1623 22.8751 38.2115 22.6916 38.2114 22.5048V2.1097C38.2115 1.9229 38.1623 1.73938 38.0689 1.5776C37.9755 1.41581 37.8412 1.28145 37.6795 1.18804C37.5177 1.09463 37.3342 1.04544 37.1474 1.04543C36.9606 1.04543 36.7771 1.09459 36.6153 1.188L18.9524 11.3856C18.7905 11.4789 18.6561 11.6133 18.5627 11.7751C18.4692 11.9369 18.42 12.1204 18.42 12.3073C18.42 12.4941 18.4692 12.6777 18.5627 12.8395C18.6561 13.0013 18.7905 13.1356 18.9524 13.229Z"
                  fill="white"/>
              <path
                  d="M0.532431 13.1229L18.1954 23.3205C18.3571 23.4139 18.5407 23.463 18.7275 23.463C18.9143 23.463 19.0978 23.4138 19.2595 23.3204C19.4213 23.227 19.5556 23.0926 19.649 22.9309C19.7424 22.7691 19.7915 22.5855 19.7915 22.3987L19.7915 2.00363C19.7915 1.81682 19.7424 1.6333 19.649 1.47152C19.5556 1.30973 19.4213 1.17537 19.2595 1.08196C19.0978 0.988546 18.9143 0.939363 18.7275 0.939356C18.5407 0.939348 18.3571 0.988516 18.1954 1.08192L0.532431 11.2795C0.370586 11.3728 0.236179 11.5072 0.142729 11.669C0.0492783 11.8308 8.01086e-05 12.0143 8.01086e-05 12.2012C8.01086e-05 12.388 0.0492783 12.5716 0.142729 12.7334C0.236179 12.8952 0.370586 13.0295 0.532431 13.1229Z"
                  fill="white"/>
            </svg>
          </div>
          <div class="ps" @click="change_ps">
            <template v-if="!suspend">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37.1734 17.6938L12.1419 3.24207C11.9126 3.10971 11.6526 3.04003 11.3878 3.04004C11.1231 3.04005 10.863 3.10975 10.6338 3.24214C10.4045 3.37452 10.2142 3.56492 10.0818 3.79421C9.94949 4.02349 9.87984 4.28357 9.87988 4.5483V33.4518C9.87984 33.7165 9.94949 33.9766 10.0818 34.2059C10.2142 34.4352 10.4045 34.6256 10.6338 34.7579C10.863 34.8903 11.1231 34.96 11.3878 34.96C11.6526 34.9601 11.9126 34.8904 12.1419 34.758L37.1734 20.3063C37.4028 20.1739 37.5932 19.9836 37.7257 19.7543C37.8581 19.525 37.9278 19.2648 37.9278 19C37.9278 18.7352 37.8581 18.4751 37.7257 18.2458C37.5932 18.0165 37.4028 17.8261 37.1734 17.6938Z"
                    fill="white"/>
              </svg>
            </template>
            <template v-else>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.9201 3.80005H7.22011C6.17324 3.80005 5.32007 4.65318 5.32007 5.70009V32.3C5.32007 33.3469 6.17312 34.2 7.22011 34.2H12.9201C13.967 34.2 14.8201 33.3469 14.8201 32.3V5.70009C14.8201 4.65318 13.967 3.80005 12.9201 3.80005ZM30.02 3.80005H24.3201C23.2732 3.80005 22.42 4.65318 22.42 5.70009V32.3C22.42 33.3469 23.2732 34.2 24.3201 34.2H30.02C31.0669 34.2 31.9201 33.3469 31.9201 32.3V5.70009C31.9201 4.65318 31.067 3.80005 30.02 3.80005Z"
                    fill="white"/>
              </svg>
            </template>
          </div>
          <div class="next">
            <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20.0476 10.9825L2.38471 0.784896C2.22294 0.691495 2.03943 0.642326 1.85262 0.642334C1.66582 0.642342 1.48231 0.691525 1.32055 0.784939C1.15878 0.878354 1.02445 1.01271 0.93107 1.17449C0.837689 1.33628 0.788543 1.5198 0.788574 1.7066V22.1017C0.788543 22.2885 0.837689 22.472 0.93107 22.6338C1.02445 22.7956 1.15878 22.93 1.32055 23.0234C1.48231 23.1168 1.66582 23.166 1.85262 23.166C2.03943 23.166 2.22294 23.1168 2.38471 23.0234L20.0476 12.8259C20.2095 12.7325 20.3439 12.5982 20.4373 12.4364C20.5308 12.2746 20.58 12.091 20.58 11.9042C20.58 11.7173 20.5308 11.5338 20.4373 11.372C20.3439 11.2102 20.2095 11.0758 20.0476 10.9825Z"
                  fill="white"/>
              <path
                  d="M38.4676 11.0885L20.8046 0.890975C20.6429 0.797574 20.4593 0.748405 20.2725 0.748413C20.0857 0.748421 19.9022 0.797604 19.7405 0.891018C19.5787 0.984433 19.4444 1.11879 19.351 1.28057C19.2576 1.44236 19.2085 1.62588 19.2085 1.81268V22.2078C19.2085 22.3946 19.2576 22.5781 19.351 22.7399C19.4444 22.9017 19.5787 23.0361 19.7405 23.1295C19.9022 23.2229 20.0857 23.2721 20.2725 23.2721C20.4593 23.2721 20.6429 23.2229 20.8046 23.1295L38.4676 12.9319C38.6294 12.8386 38.7638 12.7042 38.8573 12.5424C38.9507 12.3806 38.9999 12.1971 38.9999 12.0102C38.9999 11.8234 38.9507 11.6398 38.8573 11.478C38.7638 11.3162 38.6294 11.1819 38.4676 11.0885Z"
                  fill="white"/>
            </svg>
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
        <div class="value">SimTrack</div>
      </div>
    </div>
  </div>
</template>

<script>
import Section_top_row from "@/components/section_top_row";
import Track_cover_row from "@/components/track_cover_row";

export default {
  name: "player_func",
  components: {Track_cover_row, Section_top_row},

  data() {
    return {
      like: 0,
      list: 0,
      suspend: true,
    }
  },
  methods: {
    change_like() {
      if (this.like === 0) this.like = 1
      else this.like = 0
    },
    change_pl() {
      if (this.list === 0) this.list = 1
      else this.list = 0
    },
    change_ps() {
      this.suspend = !this.suspend
    }
  }
}
</script>

<style scoped>
.recommender {
  position: relative;
  z-index: 99;
}

.cover > img {
  height: 350px;
  width: 350px;
  margin-top: 50px;
}

.song_func svg {
  cursor: pointer;
}

.song_func path {
  transition: all .3s ease-in-out;
}

.pn {
  width: 100%;
}

.pn_button {
  width: 188px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
}

.song_func {
  display: flex;
  justify-content: flex-end;
  width: 350px;
  margin: 0 auto;
  margin-top: -20px;
}

.song_func > div {
  margin-left: 15px;
}

.play_processor {
  margin: 5px auto 20px auto;
  width: 350px;
  height: 6px;
  background-color: #C5C4C4;
  border-radius: 6px;
}

#ins-time {
  display: none;
}

#shadow-hover {
  display: none;
}

#seek-bar {
  width: 150px;
  height: 6px;
  border-radius: 6px;
  background-color: #FFFFFF;
}

.info {
  margin-top: 30px;
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
  background: linear-gradient(90deg, #FFF618 0%, #D9D9D9 100%);

  position: relative;

  overflow: hidden;
}

.value {
  font-weight: 700;
  font-size: 72px;
  line-height: 42px;

  letter-spacing: -0.07em;

  color: #2C2C2C;
  position: absolute;

  bottom: 0;
  right: 5px;
}

.name {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.07em;

  color: #8D8D8D;
  position: absolute;

  top: 0;
  left: 0;
}

.player {
  margin-bottom: 60px;
}
</style>