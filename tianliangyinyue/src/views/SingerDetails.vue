<template>
  <div>
    <div class="Bgc"></div>
    <div class="singerName">
      <img :src="artistinfo.avatar_middle" />
      <p>{{artistinfo.name}}</p>
    </div>
    <ul>
      <li v-for="item in songlist" :key="item.song_id">{{item.title}}</li>
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
      this.artistinfo = res.artistinfo;
      this.songlist = res.songlist;
    });
  }
};
</script>