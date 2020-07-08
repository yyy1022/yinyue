<template>
  <div>
    <SingerItem v-for="item in list" :key="item" :tinguid="item"></SingerItem>
  </div>
</template>
<script>
import SingerItem from "./components/SingerItem";
export default {
  name: "Singer",
  data() {
    return {
      list: [2517, 7994, 1091, 45561, 2507, 245815, 1077, 1204, 1117, 82366]
    };
  },
  components: {
    SingerItem
  }
};
</script>