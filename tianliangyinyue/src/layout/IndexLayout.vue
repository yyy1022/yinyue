<template>
  <div>
    <!-- 顶部-->
    <header>
      <ul class="h-nav">
        <li>
          <router-link to="/index">
            <img src="../assets/logo-ea5.png" alt class="img" />
          </router-link>
        </li>
        <li>
          <router-link to="/index/singer">歌手</router-link>
        </li>
        <li>
          <router-link to="/index/bill">榜单</router-link>
        </li>
        <li>
          <router-link to="/index/my">我的</router-link>
        </li>
        <li>
          <router-link to="/index/search">搜索</router-link>
        </li>
      </ul>
    </header>
    <!--        页面-->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexLayout"
};
</script>

<style scoped lang="less">
.h-nav {
  list-style: none;
  display: flex;
  justify-content: space-around;
  height: 50px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #999;
  text-align: center;
  line-height: 50px;
  //   align-items: center;
  li {
    width: 20%;
    text-align: center;
  }
  .img {
    height: 80%;
    margin-top: 5px;
  }
  a {
    color: #999;
    text-decoration: none;
  }
  .router-link-active {
    color: red;
  }
}
</style>