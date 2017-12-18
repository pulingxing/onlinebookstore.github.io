<template>

  <div class="me">
    
    <div class="meBox">
    </div>
    <div class="meImg">
        <img src="../assets/girl2.jpg" alt="">
    </div>
    <span class="userName" v-model="userName">
        
    </span>
    <!-- 个人中心列表 -->
    <p v-for="(items,index) in msg" :key="items.id" class="listItem" @click="clickIdx(index)">{{items}}

        <i class="glyphicon glyphicon-menu-right" style="float:right;font-weight = :700;"></i></p>
    <div calss="" style="text-align: center;margin-top:10px;">
        <button type="button" id="logout">退出登录</button>
    </div>
      <!-- 设置个人资料 -->
      <persionalinfo :perShow="perShow" @backToMe = "backToMe"></persionalinfo>
      <!-- 设置登录框 -->
      <login ></login>
      <!-- 设置收货地址 -->
      <adderess :addShow="addShow" @backToMe = "backToMe"></adderess>
  </div>
  
</template>

// <script>
// 导入组件
import login from "./Login"
import persionalinfo from './Persionalinfo'
import adderess from './Adderess'  
export default {
  name: "Me",
  components: {
    login,
    persionalinfo,
    adderess
  },
  data() {
    return {
      // 个人中心列表
      msg: ["设置个人资料", "收货地址管理", "我的订单", "我的评价", "商品收藏", "店铺收藏", "浏览记录"],
      /**状态码 */
      // 控制个人中心显示
      meShow:true,
      // 控制个人资料显示
      perShow:false,
      // 控制地址显示
      addShow:false,
      // 登录显示
      loginShow:false,
      // 用户名绑定
      userName:''
    }
  },
  methods: {
     clickIdx:function(index){
        if(index === 0 ){
          // 显示个人资料
          this.perShow = true
        }else if(index === 1){
          // 显示地址修改
          this.addShow = true
          
        }
    },
    // 获取用户名
    getLocalUsers:function(){
      if(localStorage.info){
      this.userName = JSON.parse(localStorage.getItem('info')).name
    }else{
      this.userName = '您尚未登录'
    }
   },
   backToMe:function(){
     this.perShow = false
     this.addShow = false
     console.log(this.addShow)
   }
 },
  mounted(){
    this.getLocalUsers();
    console.log(this.userName)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
main {
  height: calc(~"100% - 100px");
  width: 100%;
  .me {
    height: 100%;
    position: relative;
    z-index: 1;
    overflow-y:scroll;
    .meBox {
      position: relative;
      width: 100%;
      height: 29%;
      background:url(../assets/image/girl.jpg) center 20% no-repeat;
      margin-bottom: 15px;
      border-bottom:1px solid #e2e2e2; 
      filter: blur(5px);
      span {
        position: absolute;
        top: 39%;
        left: 30%;
      }
    }
  }
}
.listItem {
  margin: 0 auto;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.logout button{
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
}
.me>p:nth-child(6){
  margin-bottom: 10px;
}
.me>p:nth-child(8){
  margin-bottom: 10px;
}
.me p{
  padding:15px;
  border-bottom: 1px solid #e2e2e2;
  position: relative;
  line-height: 15px;
}
.selfInfo,.addr{
  background: white;
  height: calc(~"100% - 100px");
}
.form-group,.button-group{
  width: 100%;
  position: relative;
}
.must{
  color:red;
  font-size:30px;
  position: absolute;
  top:10%;
  right:0;
}
.textcl{
  width:90%;
  margin-left: 15px;
}
.header{
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  margin-bottom: 5%;

}
.header>span:nth-child(1){
  float: left;
  position: relative;
  left:5%;
  font-size: 30px;
  color:rgba(0, 0, 0, 0.6);
}
.selSet{
  display: inline-block;
  width: 29.333%;
}
.sub{
  text-align: center;
}
.sub button{
    width: 90%;
    padding:20px;
    background: #CC3333;
    margin: 0 auto;
    font-size: 16px;
    outline: none;
    border:none;
    border-radius: 10px;
    color:#fff;
}
.meImg {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  // border: 1px solid red;
  overflow: hidden;
  position: absolute;
  top:58px;
  left: 50%;
  transform: translateX(-50%);
}
.meImg img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.userName{
  position: absolute;
  top:180px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(219, 150, 150);
}
#title{
  position: absolute;
  left:50%;
  top: 0%;
  transform: translateX(-50%);
}
#logout{
    width: 90%;
    padding:15px;
    background: #29C08D;
    margin: 0 auto;
    font-size: 16px;
    outline: none;
    border:none;
    border-radius: 10px;
    color:#fff;
}
// #logout:hover{
//   background: greenyellow;
// }
// #logout,#subChange,#subAddr:hover{
//   background-color: greenyellow;
// }
</style>
