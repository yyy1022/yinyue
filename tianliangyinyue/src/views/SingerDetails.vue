<template>
  <div
    style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"
  >
    <div class="singerName">
      <img :src="artistinfo.avatar_middle" />
      <p>{{artistinfo.name}}</p>
    </div>
    <ul>
      <li v-for="item in songlist" :key="item.song_id" class="sing-list">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
import { getSingerDetails } from "../api/music-api";
export default {
  name: "SingerDetails",
  data() {
    return {
      artistinfo: {},
      songlist: []
    };
  },
  created() {
    getSingerDetails(this.$route.params.tinguid).then(res => {
      console.log(res);
      this.artistinfo = res.data.artistinfo;
      this.songlist = res.data.songlist;
    });
  }
};
</script>
<style lang="less" scoped>
.singerName {
  // display: flex;
  width: 100%;
  height: 100px;
  background-color: #cccccc;
  text-align: center;
  padding-top: 20px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.sing-list {
  border-bottom: 1px solid #6666;
  height: 50px;
  line-height: 50px;
}
</style>