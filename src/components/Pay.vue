<template>
    <div class="pay">
        <h1 class="header">{{msg}}</h1>
    </div>
</template>

<script>
export default {
  name:'Pay',
  deta(){
      msg:'支付中心'
  },
}
</script>
<style lang="less" scoped>
.pay {
    width: 100%;
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
}
</style>


