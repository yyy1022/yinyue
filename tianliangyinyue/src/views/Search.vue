<template>
  <div>
    <div class="search-content">
      <input type="text" v-model="query" />
      <button @click="getSearchList">搜索</button>
    </div>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in list" :key="index" :title="item.artistname">
        <SearchList :value="item.artistname"></SearchList>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import SearchList from "../components/SearchList";
import { getSearch } from "../api/music-api";
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      query: "",
      active: 1,
      list: []
    };
  },
  components: {
    SearchList
  },
  created() {},
  computed: {
    ...mapState({ login: "login", isLogin: "isLogin" })
  },
  methods: {
    getSearchList() {
      // console.log(this.query);
      getSearch(this.query).then(res => {
        // debugger;
        // console.log(res);
        this.list = res.data.artist;
      });
    }
  }
};
</script>
<style scoped lang="less">
.search-content {
  display: flex;
  flex-direction: row;
  // overflow: hidden;
  // border: 1px solid black;
  width: 100px;
  padding: 10px 40px;
  input {
    height: 30px;
    border: 1px solid black;
    flex-shrink: 0;
  }
  button {
    flex-grow: 1;
    width: 100px;
    margin-left: 20px;
  }
}
</style>;
