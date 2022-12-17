<template>
  <div class="block">
    <div class="block_title">
      Listen Now
    </div>
    <div class="block_content">
      <div class="block_left">
        <div class="sub_title">
          Made for You
        </div>
        <div class="content_row">
          <div class="content_card my_station">
            <div class="content_img">
              <img src="@/assets/stationbg.png" alt="station_bg">
            </div>
            <div class="content_title_bar">
              <div class="content_title">
                Your Personal Station
              </div>
            </div>
          </div>
          <div class="question">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4_1708)">
                <path
                    d="M16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32V32ZM14.026 21.996V26H18.108V21.996H14.026ZM9.72 13.018H13.542C13.542 12.55 13.594 12.112 13.698 11.706C13.7903 11.3239 13.9531 10.9624 14.178 10.64C14.398 10.336 14.674 10.094 15.012 9.912C15.35 9.73 15.752 9.638 16.22 9.638C16.914 9.638 17.456 9.828 17.846 10.21C18.236 10.59 18.43 11.18 18.43 11.978C18.448 12.446 18.366 12.838 18.184 13.148C18.002 13.46 17.764 13.748 17.468 14.008C17.174 14.268 16.854 14.528 16.508 14.788C16.16 15.048 15.83 15.354 15.518 15.708C15.1847 16.0961 14.9086 16.5298 14.698 16.996C14.466 17.498 14.322 18.122 14.27 18.868V20.038H17.78V19.05C17.85 18.53 18.02 18.096 18.288 17.75C18.556 17.404 18.864 17.096 19.21 16.828C19.558 16.558 19.926 16.29 20.316 16.022C21.1637 15.4455 21.8164 14.6254 22.188 13.67C22.404 13.13 22.512 12.446 22.512 11.614C22.4891 10.3883 21.9848 9.22083 21.108 8.364C20.606 7.862 19.944 7.442 19.12 7.104C18.296 6.764 17.27 6.596 16.04 6.596C15.086 6.596 14.224 6.756 13.452 7.076C12.7067 7.37923 12.0335 7.83577 11.476 8.416C10.9209 9.0011 10.4872 9.69036 10.2 10.444C9.896 11.224 9.736 12.084 9.72 13.018V13.018Z"
                    fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_4_1708">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div class="block_divider">
      </div>
      <div class="block_right">
        <div class="sub_title">
          Playlists
        </div>
        <div class="scroll_container">
          <div class="content_row playlist">
            <div class="content_card playlist songname_1">
              <div class="content_img">
                <div class="img_cover"></div>
              </div>
              <div class="content_title_bar">
                <div class="content_title">
                  Playlist Name
                </div>
              </div>
            </div>

            <div class="content_card playlist songname_2">
              <div class="content_img">
                <div class="img_cover"></div>
              </div>
              <div class="content_title_bar">
                <div class="content_title">
                  Playlist Name
                </div>
              </div>
            </div>

            <div class="content_card playlist songname_1">
              <div class="content_img">
                <div class="img_cover"></div>
              </div>
              <div class="content_title_bar">
                <div class="content_title">
                  Playlist Name
                </div>
              </div>
            </div>

            <div class="content_card playlist songname_2">
              <div class="content_img">
                <div class="img_cover"></div>
              </div>
              <div class="content_title_bar">
                <div class="content_title">
                  Playlist Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "listen_now"
}
</script>

<style scoped>
.block {
  margin: 30px 45px;
  margin-right: 0;
}

.block_content {
  display: flex;
  overflow: hidden;
}

.content_row {
  display: flex;
  margin: 15px 30px;
  margin-left: 0;
}

.content_card {
  width: 250px;
  height: 325px;
  left: 38px;
  top: 206px;

  transition: all .3s ease-in-out;
  cursor: pointer;
}

.my_station.content_card {
  background: linear-gradient(180deg, #FFF618 0%, #fff 100%);
}

.content_card:hover {
  transform: scale(1.01);
}

.content_img {
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.content_img img {
  height: 100%;
  width: 100%;
}

.content_title_bar {
  width: 100%;
  height: 75px;

  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
}

.content_title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;
}

.block_title {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: -0.07em;
  text-align: left;

  color: #FFFFFF;
}

.sub_title {
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -0.07em;
  text-align: left;

  color: #F5F5F5;
}

.question {
  margin-left: 10px;
}

.block_divider {
  width: 3px;
  height: 325px;
  background: #FFFFFF;

  box-sizing: border-box;

  border: solid 1px #fff;

  margin: 35px 10px;
}

.content_card.songname_1 {
  background: #87331A;
}

.content_card.songname_2 {
  background: #8BAAB0;
}

.img_cover {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.content_card.songname_1 > .content_img .img_cover {
  background-image: url("@/assets/track_cover1.png");
}

.content_card.songname_2 > .content_img .img_cover {
  background-image: url("@/assets/track_cover2.png");
}

.content_card.playlist {
  margin-right: 30px;
}

.content_row.playlist {
  margin-right: 50px;
  padding-right: 50px;
  display: inline-flex;
}

.block_right {
  overflow: hidden;
}

.block_right .sub_title{
  margin-left: 50px;
}

.scroll_container {
  padding-left: 50px;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow-y: hidden;
}
</style>