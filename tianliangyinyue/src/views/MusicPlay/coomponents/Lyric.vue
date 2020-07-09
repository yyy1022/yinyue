

// 歌词
<template>
  <div>
    <ul class="lyric-list" ref="list">
      <li
        v-for="(item,index) in lrcContent"
        :key="index"
        :class="index==active?'active':''"
        @click="setProccess(item.time)"
      >{{item.content}}</li>
    </ul>
  </div>
</template>
<script>
import { getLrc } from "../../../api/music-api";
import { mapState } from "vuex";
// import { getSongInfo } from "../../api/music-api";
export default {
  name: "Lyric",
  props: {
    lrcLink: String
  },
  data() {
    return {
      lrcContent: [],
      // 挡片激活
      active: 0
      // content: ""
    };
  },
  computed: {
    ...mapState(["currentTime"])
  },
  created() {
    // console.log(this.lrcLink);

    getLrc(this.lrcLink).then(res => {
      // debugger;
      const lrcContent = res.data.content.replace(/\r/g, "").split("\n");
      this.lrcContent = lrcContent;
      let reg = /\[\d*:\d*\.\d*\]/g;
      if (!res.data.content.match(reg)) {
        this.lrcContent = lrcContent.map(item => {
          return {
            time: -1,
            content: item
          };
        });
      }
      // console.log(this.lrcContent);
      lrcContent.forEach(item => {
        let content = item.match(reg);
        if (content) {
          content.forEach(timeItem => {
            console.log(item);

            let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ""));
            let sec = Number(timeItem.match(/:\d*/)[0].replace(":", ""));
            // 最终的秒数
            let time = min * 60 + sec;
            let contentStr = item.replace(reg, "");
            console.log(contentStr);

            this.lrcContent.push({
              time,
              content: contentStr
            });
          });
        }
      });
    });
  },
  watch: {
    // lrcLink(){
    //     if (this.lrcLink){
    //         console.log(this.lrcLink)
    //     }
    // }
    currentTime() {
      console.log(this.currentTime);
      // 根据这个时间判断激活的歌词是哪一个
      // 普通for循环
      for (let i = 0; i < this.lrcContent.length; i++) {
        if (this.lrcContent[i].time > this.currentTime) {
          if (i > 0) {
            this.active = i - 1;
            // this.$refs.list.children[this.active].offsetTop);
          }
          // // eslint-disable-next-line
          // debugger
          if (!this.noScroll) {
            this.$refs.list.scrollTop =
              this.$refs.list.children[this.active].offsetTop - 50;
          }
          break;
        }
      }
    }
  },
  methods: {
    setProccess(time) {
      this.$store.commit("setProccess", { proccess: time });
    }
  }
};
</script>
<style lang="less" scoped>
.lyric-list {
  margin-top: 20px;
  height: 150px;

  overflow: scroll;
  text-align: center;
  position: relative;
  .active {
    font-size: 18px;
    color: lightcoral;
  }
}
</style>
