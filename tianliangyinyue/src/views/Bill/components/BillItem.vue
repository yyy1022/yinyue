<template>
  <div class="bill-item">
    <div class="cover">
      <img :src="billboard.pic_s192" alt />
    </div>
    <ul class="list">
      <li v-for="(item,index) in list" :key="item.song_id">
        <span>{{index+1}}</span>
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
import { getBillList } from "../../../api/music-api.js";
export default {
  name: "BillItem",
  data() {
    return {
      list: [],
      billboard: {}
    };
  },
  props: {
    type: {
      type: [String, Number]
    }
  },
  created() {
    getBillList(this.type, 3).then(res => {
      console.log(res);
      this.list = res.data.song_list;
      this.billboard = res.data.billboard;
    });
  }
};
</script>
<style scoped lang="less">
.bill-item {
  padding: 5px;
  display: flex;
  .cover {
    flex-shrink: 0;
    @img-hight: 100px;
    width: @img-hight;
    height: @img-hight;
    img {
      width: 100%;
      height: 100%;
    }
    .list {
      padding: 3px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        color: crimson;
      }
    }
  }
  //   列表
}
</style>