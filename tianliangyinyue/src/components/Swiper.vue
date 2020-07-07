<template>
  <div class="swipe-list">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/b1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/b2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/b3.jpg" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swiper"
};
</script>
<style scoped lang="less">
.swipe-list {
  margin: 20px 10px;
  img {
    width: 100%;
  }
}
</style>;
