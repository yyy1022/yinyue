<template>
  <div
    style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"
  >
    <div class="bill-details">
      <img :src="list.pic_s444" />
      <div v-for="(item,index) in listContent " :key="index" class="bill-details-list">
        <p class="text">{{item.title}}</p>
        <p>{{item.author}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getBillDetails } from "../api/music-api";
export default {
  name: "BillDetails",
  data() {
    return {
      list: {},
      listContent: []
    };
  },
  created() {
    getBillDetails(this.$route.params.type, 10).then(res => {
      console.log(res.data);
      // this.artistinfo = res.data.artistinfo;
      this.list = res.data.billboard;
      this.listContent = res.data.song_list;
    });
  }
};
</script>
<style lang="less" scope>
.bill-details-list {
  border-bottom: 1px solid #999;
  .text {
    font-size: 20px;
  }
}
</style>