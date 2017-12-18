<template>
<transition name="slide-fade">
	<main class="addr" v-if="addShow">
		<i class="glyphicon glyphicon-menu-left " @click="$emit('backToMe')"></i>
		<form class="form-horizontal">
			<div class="form-group ">
				<label for="inputName" class="col-sm-2 control-label formset" >姓名</label>
				<div class="col-sm-10">
					<input type="text" class="form-control " id="inputName" placeholder="请输入你的真实姓名" v-model="addData.addName">
				</div>
			</div>
			<div class="form-group">
				<label for="inputAdder" class="col-sm-2 control-label formset" >电话号码</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputAdder" placeholder="请输入我们联系你的电话号码" v-model="addData.addNumber" @blur="checkPhoneNumber">
				</div>
			</div>
			<div class="form-group">
				<label for="inputPostNumber" class="col-sm-2 control-label formset">邮政编码</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputPostNumber" placeholder="请输入你所在地的邮政编码" v-model="addData.addPost">
				</div>
			</div>
			<div class="container">
				<div class="row">
					<select class="form-control col-md-4 col-sm-4 selSet" v-model="addData.addP">
						<option value="四川省">四川省</option>
						<option value="北京市">北京市</option>
						<option value="深圳市">深圳市</option>
						<option value="...">...</option>
					</select>
					<select class="form-control col-md-4 col-sm-4 selSet" v-model="addData.addC">
						<option value="成都市">成都市</option>
						<option value="绵阳市">绵阳市</option>
						<option value="南充市">南充市</option>
						<option value="...">...</option>
					</select>
					<select class="form-control col-md-4 col-sm-4 selSet" v-model="addData.addA">
						<option value="金牛区">金牛区</option>
						<option value="高新区">高新区</option>
						<option value="武侯区">武侯区</option>
						<option value="...">...</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label for="inputPostDetail" class="col-sm-2 control-label formset">详细地址</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputPostDetail" placeholder="请输入详细的街道、楼栋、门牌" v-model="addData.addD">
				</div>
			</div>
			<div class="subAddrees" style="text-align:center;">
				<button type="button" id="subAddr" @click="addSub">确认地址</button>
			</div>
		</form>
		<!-- 设置弹出框 -->
      <popups v-if="popupShow" @comfirm="comfirmAdd"></popups>
	</main>
	</transition>
</template>

<script>
import popups from './Popups'
export default {
	name: "adderess",
	components:{
			popups
		},
  props:['addShow'],
  data() {
    return {
		popupShow:false,
		// 绑定表单的值
		addData:{
			addName:'',
			addNumber:'',
			addPost:'',
			addP:'四川省',
			addC:'成都市',
			addA:'高新区',
			addD:''
		}
  }
},
  methods: {
     addSub:function(){
			localStorage.setItem("addStorage",JSON.stringify(this.addData))
			this.popupShow = true
		},	
		checkPhoneNumber:function(){
			var reg = new RegExp('/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/')
			if(!reg.test(String(this.addData.addNumber))){
					alert("手机号码有误，请重新输入")
			}
		},
		getAddLocal:function(){
			if (localStorage.addStorage) {
				this.addData = JSON.parse(localStorage.addStorage)
			}else{
				return
			}
			
		},
		comfirmAdd:function(){
			this.popupShow = false 
			this.$emit('backToMe')
		}
	},
	mounted(){
		this.getAddLocal();
	}
}
</script>


<style lang="less" scoped>
i {
  position: fixed;
  width: 50px;
  height: 50px;
  left: 0px;
  top: 0;
  text-align: center;
  line-height: 50px;
}
.addr{
	position: absolute;
	top:0;
	left:0;
	height: 660px;
	padding: 10px;
	overflow-x: hidden;
}
.container {
    width: 750px;
    text-align: center;
    margin: 0 auto;
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
#subAddr{
	width: 95%;
	padding: 15px;
	border-radius: 10px;
	background: #29C08D;
	outline: none;
	border: none;
	color: #fff;
	font-size: 18px;
	cursor: pointer;
	text-align: center;
}

</style>
