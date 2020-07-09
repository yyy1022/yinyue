<template>
  <div class="box">
    <!-- 首页 -->
    <BillList title="今日榜单" type="2" :size="6"></BillList>
    <BillList title="新歌速递" type="1" :size="3"></BillList>
    <Swiper></Swiper>
    <MusicBill></MusicBill>
    <BillList title="热门榜单" type="2" :size="6"></BillList>
  </div>
</template>

<script>
import BillList from "../components/BillList";
import MusicBill from "../components/MusicBill";
import Swiper from "../components/Swiper";
// import SingerDetails from "../views/SingerDetails";
export default {
  name: "Index",
  components: {
    BillList,
    MusicBill,
    Swiper
  }
};
</script>

<style scoped  lang="less">
.box {
  background-color: #f9f9f9;
}
</style>