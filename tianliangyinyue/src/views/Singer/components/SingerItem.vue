
<template>
  <router-link class="singer-content" :to="'/index/singer-dtails/'+list.ting_uid" tag="div">
    <div class="singer-box">
      <img :src="list.avatar_middle" alt />
    </div>
    <p class="text">{{list.name}}</p>
  </router-link>
</template>
<script>
import { getSingerList } from "../../../api/music-api.js";
export default {
  name: "SingerItem",
  data() {
    return {
      list: {}
    };
  },
  props: {
    tinguid: {
      type: Number
      // default
    }
  },
  created() {
    getSingerList(this.tinguid).then(res => {
      console.log(res.data);
      this.list = res.data;
      // this.billboard = res.data.billboard;
    });
  }
};
</script>
<style scoped lang="less">
.singer-content {
  display: flex;
  border-bottom: 1px solid #999;
  .singer-box {
    flex-shrink: 0;
    height: 60px;
    width: 60px;

    img {
      border: 1px solid transparent;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .text {
    flex-grow: 1;
    padding: 10px;
    line-height: 100%;
  }
}
</style>