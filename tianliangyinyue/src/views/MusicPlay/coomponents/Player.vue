// 播放


<template>
  <div>
    <div class="player-icon">
      <van-icon name="like-o" @click="collect" v-show="!isLike" />
      <van-icon name="like" @click="collect" v-show="isLike" color="red" />
      <a download :href="fileLink">
        <van-icon name="down" />
      </a>
    </div>
  </div>
</template>
<script>
import { Toast, Dialog } from "vant";
export default {
  name: "Player",
  data() {
    return {
      isLike: false
    };
  },
  props: {
    fileLink: String
  },
  methods: {
    collect() {
      // 如果已经收藏的话
      if (this.isLike) {
        // 是否取消收藏
        Dialog.confirm({
          title: "是否取消收藏",
          message: "您确定要取消收藏吗？"
        })
          .then(() => {
            // 当用户点击确认之后，到这里
            this.isLike = !this.isLike;
          })
          .catch(() => {});
      } else {
        // 收藏
        this.isLike = !this.isLike;
        // 弹出，收藏成功
        Toast.success("收藏成功");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.player-icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}
i {
  font-size: 30px;
}
</style>