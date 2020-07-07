<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="item in list" :key="item.song_id" class="music-bill-list">
          <div>
            <img :src="item.pic_big" alt />
          </div>
          <p>{{item.title}}</p>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
 <script>
import { getBillList } from "../api/music-api";

export default {
  name: "MoreMusic",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      offset: 0
    };
  },
  methods: {
    onLoad() {
      this.offset += 10;
      getBillList(this.$route.params.type, 10, this.offset).then(res => {
        // console.log(res);
        this.list = res.data.song_list;
        this.loading = false;
      });
    },
    onRefresh() {
      // 清空列表数据
      this.list = [];
      this.offset = 0;
      // getBillList(this.$route.params.type, 10, this.offset).then(res => {
      //   // console.log(res);
      //   this.list = this.list.concat(res.data.song_list);
      //   this.refreshing = false;
      // });
    }
  },

  created() {
    getBillList(this.$route.params.type).then(res => {
      console.log(res);
      this.list = res.data.song_list;
    });
  }
};
</script>
<style scoped lang="less"></style>;
