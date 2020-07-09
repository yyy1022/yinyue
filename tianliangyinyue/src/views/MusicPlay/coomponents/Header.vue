<template>
  <div class="h-box">
    <router-link to="/index">
      <van-icon name="wap-home-o" color="red" />
    </router-link>

    <p class="text">{{title}}</p>
    <router-link to="/index/search">
      <van-icon name="search" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>
<style lang="less" scoped>
.h-box {
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon1 {
    margin: 10px;
  }
  p {
    font-size: 20px;
  }
  i {
    font-size: 30px;
  }
}
</style>