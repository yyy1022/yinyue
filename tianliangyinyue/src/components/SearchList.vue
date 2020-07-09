<template>
  <div class="search-box">
    <ul>
      <li v-for="(item ,index) in list" :key="index" class="search-list">
        <div class="search-img">
          <img :src="item.artistpic" alt />
        </div>

        <div class="search-text">{{item.albumname}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSearch } from "../api/music-api";
// import { Form } from "vant";
export default {
  name: "SearchList",
  props: {
    value: String
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    getSearch(this.value).then(res => {
      //   debugger;
      console.log(res);
      this.list = res.data.album;
    });
  }
};
</script>
<style lang="less" scoped>
.search-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  .search-img {
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search-text {
    padding: 30px;
    color: hotpink;
  }
}
</style>