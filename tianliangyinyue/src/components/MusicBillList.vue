<template>
  <div>
    <ul>
      <li v-for="item in list1" :key="item.song_id" class="music-bill-list">
        <div class="imgBox">
          <img :src="item.pic_big" alt />
        </div>

        <div class="rightBox">
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
  display: flex;
  .imgBox {
    width: 100px;
    flex-shrink: 0;
    img {
      width: 100%;
    }
    // height: 130px;
    // float: right;
    // border: 1px solid black;
  }
  .rightBox {
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>;
