<template>
  <div
    style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"
  >
    <Header :title="songInfo.title"></Header>
    <div class="lyric-box">
      <img :src="songInfo.pic_big" />
    </div>
    <Lyric v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink"></Lyric>
    <Player :file-link="bitrate.file_link"></Player>
    <div class="player-box">
      <audio :src="bitrate.show_link" controls ref="audio"></audio>
    </div>
  </div>
</template>
<script>
import Player from "./coomponents/Player";
import Header from "./coomponents/Header";
import Lyric from "./coomponents/Lyric";
import { getSongInfo } from "../../api/music-api";
import { mapState } from "vuex";
// import { getSongInfo } from "../../api/music-api";
export default {
  name: "MusicPlay",
  components: {
    Header,
    Lyric,
    Player
  },
  data() {
    return {
      // 歌曲详情
      songInfo: {},
      // 歌曲的媒体信息
      bitrate: {}
    };
  },
  created() {
    getSongInfo(this.$route.params.songId).then(res => {
      console.log(res);
      // debugger;

      this.songInfo = res.data.songinfo;
      this.bitrate = res.data.bitrate;
    });
  },
  mounted() {
    this.$refs.audio.addEventListener("timeupdate", () => {
      this.$store.commit("setCurrentTime", {
        currentTime: this.$refs.audio.currentTime
      });
    });
  },
  computed: {
    ...mapState(["proccess"])
  },
  watch: {
    proccess() {
      this.$refs.audio.currentTime = this.proccess;
    }
  }
};
</script>
<style lang="less" scoped>
.lyric-box {
  width: 100%;

  text-align: center;
  margin-top: 20px;
  img {
    height: 180px;
    width: 180px;
    border-radius: 10px;
  }
}
.player-box {
  text-align: center;
  margin-top: 30px;
}
</style>