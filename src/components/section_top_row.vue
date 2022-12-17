<template>
  <div class="rank_sec">
    <div class="title">
      Top <span>Albums</span> of <label class="selection">
      <span class="selection_text">
        {{ select_data }}
        <svg style="margin-left: 12px" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M9.98431 9.99662C9.65111 9.99727 9.32819 9.88108 9.07162 9.66822L0.515173 2.52905C0.223944 2.28669 0.0408018 1.93843 0.00603444 1.56087C-0.0287329 1.18332 0.0877231 0.807394 0.329783 0.515807C0.571843 0.224219 0.919679 0.0408521 1.29677 0.00604192C1.67386 -0.0287683 2.04932 0.0878303 2.34055 0.330189L9.98431 6.72688L17.6281 0.558643C17.7739 0.440038 17.9418 0.351467 18.122 0.298021C18.3021 0.244575 18.4911 0.227307 18.6779 0.24721C18.8648 0.267113 19.0459 0.323794 19.2108 0.413996C19.3757 0.504198 19.5212 0.626141 19.6388 0.772818C19.7694 0.919629 19.8684 1.09186 19.9294 1.27873C19.9904 1.4656 20.0122 1.66306 19.9935 1.85877C19.9747 2.05447 19.9158 2.24419 19.8205 2.41604C19.7251 2.58789 19.5953 2.73817 19.4392 2.85745L10.8827 9.75389C10.6188 9.93311 10.3025 10.0186 9.98431 9.99662V9.99662Z"
            fill="white"/></svg>
      </span>
      <select @change="change_show" ref="Albums_sel" id="Albums_sel" style="opacity: 0;padding-right: 20px">
        <option>Overall</option>
        <option>2021</option>
        <option>2020</option>
      </select>
    </label>
    </div>
    <div class="question">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4_1657)">
          <path
              d="M16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32V32ZM14.026 21.996V26H18.108V21.996H14.026ZM9.72 13.018H13.542C13.542 12.55 13.594 12.112 13.698 11.706C13.7903 11.3239 13.9531 10.9624 14.178 10.64C14.398 10.336 14.674 10.094 15.012 9.912C15.35 9.73 15.752 9.638 16.22 9.638C16.914 9.638 17.456 9.828 17.846 10.21C18.236 10.59 18.43 11.18 18.43 11.978C18.448 12.446 18.366 12.838 18.184 13.148C18.002 13.46 17.764 13.748 17.468 14.008C17.174 14.268 16.854 14.528 16.508 14.788C16.16 15.048 15.83 15.354 15.518 15.708C15.1847 16.0961 14.9086 16.5298 14.698 16.996C14.466 17.498 14.322 18.122 14.27 18.868V20.038H17.78V19.05C17.85 18.53 18.02 18.096 18.288 17.75C18.556 17.404 18.864 17.096 19.21 16.828C19.558 16.558 19.926 16.29 20.316 16.022C21.1637 15.4455 21.8164 14.6254 22.188 13.67C22.404 13.13 22.512 12.446 22.512 11.614C22.4891 10.3883 21.9848 9.22083 21.108 8.364C20.606 7.862 19.944 7.442 19.12 7.104C18.296 6.764 17.27 6.596 16.04 6.596C15.086 6.596 14.224 6.756 13.452 7.076C12.7067 7.37923 12.0335 7.83577 11.476 8.416C10.9209 9.0011 10.4872 9.69036 10.2 10.444C9.896 11.224 9.736 12.084 9.72 13.018V13.018Z"
              fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_4_1657">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "section_top_row",
  data() {
    return {
      select_data: "Overall"
    }
  },
  mounted() {
  },
  methods: {
    change_show() {
      console.log("Asa")
      this.select_data = this.$refs.Albums_sel.value
    }
  },
}
</script>

<style scoped>
.rank_sec {
  display: flex;
  margin: 36px 15px 36px 45px;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.title > span {
  font-weight: 900;
}

.title select {
  background: none;
  border: none;
  font-size: 36px;
  color: #fff;
  text-decoration: underline;
}

select option {
  font-size: 14px;
}

.title select::after {
  content: " ";
}

.selection {
  position: relative;
}

.selection_text {
  position: absolute;
  font-size: 36px;
  color: #fff;
  text-decoration: underline;
  margin-left: 3px;
}

.question {
  margin-right: 35px;
}
</style>