
<template >
  <div class="music-list-container">
    <h3>
      音乐榜单
      <span>更多</span>
    </h3>
    <van-tabs v-model="active">
      <van-tab title="热歌榜">
        <MusicBillList :type="1"></MusicBillList>
      </van-tab>
      <van-tab title="新歌榜">
        <MusicBillList :type="2"></MusicBillList>
      </van-tab>
      <van-tab title="King榜">
        <MusicBillList :type="24"></MusicBillList>
      </van-tab>
    </van-tabs>
  </div>
</template>
 <script>
import MusicBillList from "./MusicBillList";

export default {
  name: "MusicBill",
  components: { MusicBillList },

  data() {
    return {
      active: "2"
    };
  },
  created() {
    // getBillList(this.type, this.size).then(res => {
    //   console.log(res);
    //   this.list = res.data.song_list;
    // });
  }
};
</script>
 <style scoped lang="less">
.music-list-container {
  margin: 20px 10px;
  // border: 1px solid black;
  overflow: hidden;
  h3 {
    // margin: 20px 10px;
    // line-height: 100%;
    overflow: hidden;
    span {
      float: right;
      color: #9999;
      font-size: 12px;
      margin-right: 10px;
      margin-top: 15px;
    }
  }
}
</style>;
