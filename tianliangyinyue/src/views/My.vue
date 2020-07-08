<template>
  <div>
    {{ login.name }}<button @click="chageLogin">退出登 录</button>
    <h3 v-for="(item, i) in billList" :key="i">{{ item.title }}</h3>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "My",
  methods: {
    chageLogin() {
      this.$store.commit("chageLogin", { isLogin: false });
    },
  },
  computed: {
    ...mapState({
      login: "login",
      isLogin: "isLogin",
      billList: "billList",
    }),
  },
  created() {
    this.$store.dispatch("setBillList", { type: 22 });
  },
};
</script>

<style scoped lang="less"></style>;
