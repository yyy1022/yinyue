<template>
  <div>搜索{{ login.name }}{{ isLogin }}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  created() {},
  computed: {
    ...mapState({ login: "login", isLogin: "isLogin" }),
  },
};
</script>
<style scoped lang="less"></style>;
