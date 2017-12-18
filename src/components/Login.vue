<template>
	<main class="loginCont" v-if="loginShow">
	<div class="login" >
		
		<header>
			<span class="choice login" @click="switchSign1" :class="{'formStyle':isClick1}">登录</span>
			<span class="choice register" @click="switchSign2" :class="{'formStyle':isClick2}">注册</span>
		</header>
		<form action="#" v-if="selected" style="margin: 50px auto;">
			<label for=""><span>手机号码</span>
				<input type="text" placeholder="请输入手机号" v-model="loginTel">
			</label>
			<label for="#"><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
				<input type="password" placeholder="请输入密码" v-model="loginPwd">
			</label>
			<button type="text" @click="login">登录</button>
			<div class="others">
				<router-link :to="{name: 'home'}" tag="a">忘记密码</router-link>
			</div>
		</form>
		<form action="#" v-else>
			<label for=""><span>手机号码</span>
				<input type="text" placeholder="请输入手机号" v-model="formVal.tel"
					   @blur="Validing($event.target,formVal.tel,reg.tel)">
				<p style="display: none">手机号码有误，请重新输入</p>
			</label>
			<br>
			<label for=""><span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
				<input type="text" v-model="formVal.niceName" @blur="Validing($event.target,formVal.tel,reg.tel)"
					   placeholder="昵称为6-16位">
				<p style="display: none">昵称有误，请重新输入</p>
			</label>
			<label for="#"><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
				<input type="password" placeholder="密码为6-20字母与数字" v-model="formVal.pwd"
					   @blur="Validing($event.target,formVal.tel,reg.tel)">
				<p style="display: none">密码有误，请重新输入</p>
			</label>
			<label for="#"><span>确认密码</span>
				<input type="password" placeholder="请再次输入密码" v-model="formVal.rePwd"
					   @blur="Validing($event.target,formVal.tel,reg.tel)">
				<p style="display: none">俩密码不一致，请重新输入</p>
			</label>
			<button type="text" @click="formSubmit">注册</button>
		</form>
	</div>
	</main>
</template>
<script>
export default {
	name: 'login',
	data() {
		return {
			title: '登录注册',
			selected: true,
			statusTrue: true,
			isClick1:true,
			isClick2:false,
			vals: [],
			loginShow:false,
			pass:{
				tel: false,
				niceName: false,
				pwd: false,
				rePwd: false
			},
			reg: {
				tel: /^1\d{10}$/,
				niceName: /^.{1,16}$/,
				pwd: /.{6,16}/
			},
			formVal: {
				tel: '',
				niceName: '',
				pwd: '',
				rePwd: ''
			},
			loginTel:'',
			loginPwd:'',
			
		}
	},
	computed: {
		statTrue() {
			return !this.statusTrue
		},
		formStyle() {
			return this.selected;
		}
	},
	methods: {
		// 判断是否显示
		getUsers:function(){
			if (localStorage.userInfo) {
				this.loginShow = false
			}else{
				this.loginShow = true
			}
		},
		//表单切换
		switchSign1() {
			this.isClick1 = true
			this.isClick2 = false
			this.selected = true
		},
		switchSign2() {
			this.isClick1 = false
			this.isClick2 = true
			this.selected = false
		},
		//表单验证
		//注册
		Validing(tag, val, reg) {
			if (reg.test(val)) {
				tag.nextElementSibling.style.display = "none";
			} else {
				tag.nextElementSibling.style.display = "block";
			}
		},
		//全都验证成功，点击注册——本地存储并跳转到登录
		formSubmit() {
			var $this = this;
			const formValue = this.formVal;
			for (let x in formValue) {
				if (formValue[x].trim() === "") {
					alert('您还有未填写的内容。');
					return false;
				}
			}
			if ((this.pass.tel = true) && (this.pass.niceName = true) && (this.pass.pwd = true) && (this.pass.rePwd = true)) {
				//本地存储
				saveVal();
				//切换到个人中心
				alert('注册成功！')
				this.loginShow = false;
				
				// this.selected = true;
			}
			function saveVal() {
				// console.log($this)
				//先将数据打包成{}
				var info = {
					tel: $this.formVal.tel,
					pwd: $this.formVal.pwd
				};
				//判断本地是否有数据
				if (localStorage.userInfo) {
					//有数据——解析-push
					const parseInfo = JSON.parse(localStorage.getItem('userInfo'));
					$this.vals.push(parseInfo);
					const stringInfo = JSON.stringify($this.vals);
					localStorage.setItem("userInfo", stringInfo)
				 	//判断输入手机号是否存在
					//存在——return  不存在——保存
					if (info.tel === $this.vals.tel) {
						alert("该手机号以注册，请更换一个！")
					} else {
						alert("注册成功，请登录！")
						this.loginShow = false;
					}
				}//没有数据——直接push
				else {
					$this.vals.push(info);
					localStorage.setItem("userInfo", JSON.stringify($this.vals))
				}
			}
		},
		//登录
		login(){
	   //点击登录——和保存的都相同，跳转至个人中心
			//先获取本地tel和pwd
			const data = localStorage.getItem("userInfo");
			// console.log(data);
			const parseData = JSON.parse(data);
			// console.log(parseData);
		if ((this.loginTel===parseData[0].tel)&&(this.loginPwd === parseData[0].pwd)){
			alert("登录成功！");
			this.parentShow = true;
		}
		}

	},
	mounted(){
		this.getUsers()
	}
}

</script>
<style scoped lang="less">
	@import "../styles/me";
</style>
