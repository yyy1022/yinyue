<template>
  <div>
    <ul>
      <li v-for="item in list1" :key="item.song_id" class="music-bill-list">
        <img :src="item.pic_big" alt />

        <div>
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getBillList } from "../api/music-api";
export default {
  name: "MusicBillList",

  props: {
    type: {
      type: Number
    }
  },
  data() {
    return {
      list1: []
    };
  },
  created() {
    getBillList(this.type, 4).then(res => {
      console.log(res);
      this.list1 = res.data.song_list;
    });
  }
};
</script>
<style scoped lang="less">
.music-bill-list {
  div {
    width: 220px;
    height: 130px;
    float: right;
    // border: 1px solid black;
  }
}
</style>;
