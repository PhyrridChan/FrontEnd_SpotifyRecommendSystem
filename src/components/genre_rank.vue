<template>
  <div class="block">
    <template v-for="i in 10" :key="i">
      <div class="card">
        <div class="rank_with_">
          <div class="shape"></div>
          <div class="rank">{{ i }}</div>
          <div class="name">hard rock</div>
        </div>
        <div class="info">
          <div class="info_tb">
            <div class="info_row top_row">
              <div class="info_name">Popularity</div>
              <div class="info_value flame">100</div>
            </div>
            <div class="info_row bottom_row">
              <div class="info_name">Rep. Artists</div>
              <div class="info_value not_cell">
                <ul>
                  <li>The Who</li>
                  <li>Cream</li>
                  <li>Jimi Hendrix</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "genre_rank"
}
</script>

<style scoped>
.block {
  text-align: left;
}

.rank {
  font-family: 'Zilla Slab Highlight', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 154px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.name {
  font-style: italic;
  font-weight: 900;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.shape {
  width: 100px;
  height: 171px;

  background: linear-gradient(90deg, #700DA3 0%, #FEBF3C 100%);
}

.info_name {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: -0.07em;

  color: #FFFFFF;
}

.info_value {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #FFFFFF;
}

.info_value.not_cell {
  line-height: 20px;
}

.info_tb {
  display: table;
  width: 240px;
}

.info_row {
  display: table-row;
}

.top_row > .info_name, .top_row > .info_value {
  border-bottom: solid 2px #fff;
  padding-bottom: 10px;
}

.bottom_row > .info_name, .bottom_row > .info_value {
  padding-top: 10px;
}

.info_name, .info_value {
  display: table-cell;
}

.info_name {
  width: 100px;
  padding-right: 20px;
}

.info_value.not_cell {
  display: block;
  position: relative;
  top: 35px;

}

.card {
  display: flex;
}

.rank_with_ {
  position: relative;
  min-width: 160px;
}

.name {
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.rank {
  position: absolute;
  bottom: -30px;
  right: 40px;
}

.block {
  display: flex;
  flex-wrap: wrap;
}

.card:nth-child(2n + 1){
  margin-right: 35px;
}

.card {
  margin: 40px 0;
}
</style>