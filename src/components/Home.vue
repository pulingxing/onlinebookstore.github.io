<template>
  <div class="home container-fluid">
    <h1>{{msg}}</h1>
    <div class="row">
      <ul class="bannerBox">
        <li v-for="(banner,index) in bannerList" :key="banner.id">
          <img :src="banner">
        </li>
      </ul>
      <ul class="dotBox">
          <li v-for="(item,index) in bannerList.length" class="{'active':index===mark}" @click="change(index)" :key="index"><span></span></li>
      </ul>
        <div class="bntBox">
          <span class="leftBtn" @cilck="bannerLeft"> < </span>
          <span class="rightBtn"> > </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    msg: '掌上书店'
    }
  },
  methods: {
    bannerLeft() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/home";
</style>
