<template>
  <div class="home">
    <h1 class="header">{{msg}}</h1>
    <app-banner :listImg="listImg"></app-banner>
    <div class="notice">
      <span class="glyphicon glyphicon-bullhorn" aria-hidden="true"></span>{{notice}}
    </div>
    <h2>新书上架</h2>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  export default {
    name: 'Home', 
    data () {
      return {
        msg: '掌上书城',
        listImg:[
        {url:"../assets/image/car.jpg"},
        {url:"../assets/image/girl.jpg"},
        {url:"../assets/image/model.jpg"}
        ],
        notice:'双12全场低至1折，更有隐藏神秘惊喜等着你哦！'
      } 
    },
    components: {
      'app-banner': Banner
    }
  }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home{
    padding: 0;
    margin: 0;
    position:relative;
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
  }
  .notice {
    width: 100%;
    height: 30px;
    
    border-bottom:1px solid #1d1d1d11;
    span {
      line-height: 30px;
      color: yellow;
      margin-left: 15px;
    } 
  }
}

</style>
