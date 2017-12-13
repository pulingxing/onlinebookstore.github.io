<template>
  <div id="app">
    
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <ul>
        <router-link :to="{name: 'home'}" tag="li" exact>
          <span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</router-link>
        <router-link :to="{name: 'classify'}" tag="li">
          <span class="glyphicon glyphicon-list" aria-hidden="true"></span>分类</router-link>
        <router-link :to="{name: 'cart'}" tag="li" >
          <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>购物车</router-link>
        <router-link :to="{name: 'me'}" tag="li" >
          <span class="glyphicon glyphicon-user" aria-hidden="true"></span>个人中心</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "./styles/common";
</style>
