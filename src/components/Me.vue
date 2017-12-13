<template>
  <div class="me">
    <h1 class="header">{{msg}}</h1>
    <header>
      <span class="rollback"><</span>
      <span class="choice login" @click="showForm" :formStyle="formStyle">登录</span>
        <span class="choice register" @click="showForm" :formStyle="formStyle">注册</span>
    </header>
    <form action="#" v-if="selected" :formStyle="formStyle">
      <label for=""><span>手机号码</span>
        <input type="text" placeholder="请输入手机号">
      </label>
      <label for="#"><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
        <input type="password" placeholder="请输入密码">
      </label>
      <button type="text">登录</button>
      <div class="others">
          <router-link :to="{name: 'me'}" tag="a" >忘记密码</router-link>
      </div>
    </form>
      <form action="#" v-else >
          <label for=""><span>手机号码</span>
              <input type="text" placeholder="请输入手机号" v-model="phone" @blur="phoneValid">
              <p v-show="phoneError">手机号码有误，请重新输入</p>
          </label>
          <br>
          <label for=""><span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
              <input type="text" placeholder="请输入昵称">
          </label>
          <label for="#"><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
              <input type="password" placeholder="密码为6-20位，包含字母与数字" v-model="password" @blur="passValid">
            <p v-show="passError">密码有误，请重新输入</p>
          </label>
          <label for="#"><span>确认密码</span>
              <input type="password" placeholder="请再次输入密码" v-model="repassword" @blur="repassValid">
              <p v-show="repassError">俩密码不一致，请重新输入</p>
          </label>
          <button type="text" @click="formSubmit">注册</button>
      </form>
  </div>
</template>
<script>
  import '../js/login.js';
  export default {
    name: 'Home', 
    data () {
      return {msg: '掌上书城'}
    }
  }
</script>
<style scoped lang="less">
    @import "../styles/me";    
</style>
