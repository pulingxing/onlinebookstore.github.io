<template>
  <div id="app">
    <header>
      <h1 class="header" v-if="!$route.params.title">{{msg}}</h1>
      <h1 class="header" v-else>{{$route.params.title}}</h1>
    </header>
    <main class="main">
      <router-view/>
    </main>    
    <footer class="footer">
      <ul>
        <router-link :to="{name: 'home',params:{title:'掌上书店'}}" tag="li" exact>
          <span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</router-link>
        <router-link :to="{name: 'classify',params:{title:'分类'}}" tag="li">
          <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>分类</router-link>
        <router-link :to="{name: 'cart',params:{title:'购物车'}}" tag="li" >
          <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>购物车</router-link>
        <router-link :to="{name: 'me',params:{title:'个人中心'}}" tag="li" >
          <span class="glyphicon glyphicon-user" aria-hidden="true"></span>个人中心</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
   return{ 
     msg:'掌上书城'
   }
  }
}
</script>

<style lang="less">
@import "./styles/common";
</style>
