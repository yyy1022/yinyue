<template>
  <div>
    <BillItem v-for="item in billTypeList" :type="item" :key="item"></BillItem>
    <!-- <BillItem :type="1"></BillItem>
    <BillItem :type="11"></BillItem>
    <BillItem :type="12"></BillItem>
    <BillItem :type="22"></BillItem>
    <BillItem :type="16"></BillItem>
    <BillItem :type="23"></BillItem>
    <BillItem :type="24"></BillItem>-->
  </div>
</template>
<script>
import BillItem from "./components/BillItem";
export default {
  name: "Bill",
  // 注册
  components: {
    BillItem
  },
  data() {
    return {
      billTypeList: [1, 2, 11, 21, 22, 23, 24]
    };
  }
};
</script>
<style scoped lang="less">
// .bill-item {
//   padding: 5px;
// }
</style>;
