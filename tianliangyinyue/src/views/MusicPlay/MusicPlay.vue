<template>
  <div
    style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"
  >
    <Header :title="songInfo.title"></Header>
    <div class="lyric-box">
      <img
        :src="songInfo.pic_big"
        class="img"
        :style="isPlay?'animation-play-state: running':'animation-play-state: paused'"
      />
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
      bitrate: {},
      isPlay: false
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
    this.$refs.audio.addEventListener("play", () => {
      this.isPlay = true;
    }),
      this.$refs.audio.addEventListener("pause", () => {
        this.isPlay = false;
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
    border-radius: 50%;
  }
}
.img {
  animation: rotate 5s linear infinite;
  // transform: rotate(360);
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.player-box {
  text-align: center;
  margin-top: 30px;
}
</style>