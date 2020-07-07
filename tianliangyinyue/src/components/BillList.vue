<template>
  <div class="bill-list-container">
    <h3>
      {{ title }}
      <router-link :to="'/index/more/'+type" tag="span">更多</router-link>
    </h3>
    <div>
      <ul class="bill-list">
        <li v-for="item in list" :key="item.song_id">
          <img :src="item.pic_big" alt />
          <div>{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getBillList } from "../api/music-api";
export default {
  name: "BillList",
  props: {
    title: {
      type: String,
      default: "榜单"
    },
    type: {
      type: String
    },
    size: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    // this.$http
    //   .get(
    //     `/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${this.size}&type=${this.type}`
    //   )
    //   .then(res => {
    //     // console.log(res);
    //     this.list = res.data.song_list;
    //   });
    getBillList(this.type, this.size).then(res => {
      // console.log(res);
      this.list = res.data.song_list;
    });
  }
};
</script>
<style scoped lang="less">
.bill-list-container {
  // border: 1px solid black;
  overflow: hidden;
  h3 {
    margin: 20px 10px;
    span {
      float: right;
      color: #9999;
      font-size: 12px;
      margin-right: 10px;
    }
  }
  .bill-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 10px;
    li {
      width: calc(100% / 3);
      box-sizing: border-box;
      padding: 10px;
      // margin: 10px;
      // text-align: center;

      img {
        width: 100%;
      }
    }
  }
}
</style
>;
