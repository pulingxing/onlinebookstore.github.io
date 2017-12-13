<template>
  <div class="me">
    <h1 class="header">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
      msg: '个人中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
  }
</style>
