<template>
<transition name="slide-fade">
  <main class="selfInfo" v-if="perShow">
     
    <i class="glyphicon glyphicon-menu-left " @click="$emit('backToMe')"></i>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="InputName" class="col-sm-1 control-label" style="text-align:center;">姓名</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" id="inputText" placeholder="请输入昵称" @blur="isCrName(nameValue)" v-model="nameValue">
          <span class="must" style="" v-show="!nameFlag">*</span>
          <span class="must" style="" v-show="nameFlag" style="color:green;">√</span>
          <p style="color:red;" v-show="nameTips">请输入正确的用户昵称!</p>
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail" class="col-sm-1 control-label" style="text-align:center;">Email</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" id="inputEmail" placeholder="请输入正确的电子邮件地址" @blur="isCrEmail(emailValue)" v-model="emailValue">
          <span class="must" style="" v-show="!emailFlag">*</span>
          <span class="must" style="" v-show="emailFlag" style="color:green;">√</span>
          <p style="color:red;" v-show="emailTips">请输入正确的电子邮箱地址!</p>
        </div>
      </div>
      <div class="button-group form-group">
        <label for="inputEmail" class="col-sm-1 control-label" style="text-align:center;">性别</label>
        <div class="col-sm-11">
          <p class="Choice">
            <span :class="{'checked':gender.male}"  @click="switch1" style="font-size:16px;">男</span>
            <span :class="{'checked':gender.female}" @click="switch2"style="font-size:16px;">女</span>
            <span :class="{'checked':gender.secrect}" @click="switch3" style="font-size:16px;">保密</span>
          </p>
          <span class="must" style="">*</span>
        </div>
      </div>
      <div class="form-group">
        <label for="inputBirthday" class="col-sm-1 control-label" style="text-align:center;">生日</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" id="inputBirthday" placeholder="年/月/日" v-model="birthdayValue">
          <span class="must" style="">*</span>
        </div>
      </div>
      <div class="form-group">
        <label for="inputIDnumber" class="col-sm-1 control-label" style="text-align:center;">身份证号</label>
        <span class="must" style="">*</span>
        <div class="col-sm-11">
          <input type="text" class="form-control" id="inputIDnumber" placeholder="请输入十八位身份证号" v-model="IDNumber">
        </div>
      </div>
      <div class="form-group">
        <label for="inputSelf" class="col-sm-1 control-label" style="text-align:center;">个人描述</label>
        <textarea class="form-control col-sm-10 textcl" rows="3" v-model="selfValue"></textarea>
      </div>
      <div class="sub">
        <button type="button" @click="setLocal" id="subChange">确认修改</button>
      </div>
    </form>
    </div>
    <!-- 设置弹出框 -->
      <popups v-if="popupShow" @comfirm="comfirmAdd"></popups>
  </main>
  </transition>
</template>
<script>
import popups from "./Popups";
export default {
  name: "persionalinfo",
  components: {
    popups
  },
  props: ["perShow"],
  data() {
    return {
      gender:{
        male:false,
        female:false,
        secrect:true
      },
      popupShow: false,
      // 绑定各个输入框的值
      emailValue: "",
      nameValue: "",
      birthdayValue: "",
      IDNumber: "",
      selfValue: "",

      emailFlag: "",
      nameFlag: "",
      nameTips: "",
      emailTips: ""
    };
  },
  methods: {
    // 判断邮箱号是否正确
    isCrEmail: function(emailValue) {
      var reg = new RegExp(
        "^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
      );
      if (reg.test(emailValue)) {
        this.emailFlag = true;
        this.emailTips = false;
      } else {
        this.emailTips = true;
        this.emailFlag = false;
      }
    },
    // 判断用户名是否正确
    isCrName: function(nameValue) {
      var reg = new RegExp("^[A-Za-z0-9_\u4e00-\u9fa5]{5,16}$");
      if (reg.test(String(nameValue))) {
        this.nameFlag = true;
        this.nameTips = false;
        console.log(this.nameTips);
      } else {
        this.nameTips = true;
        this.nameFlag = false;
      }
    },
    // 男女切换
    switch1(){
      this.gender.male = true
      this.gender.female = false
      this.gender.secrect = false
    },
    switch2(){
      this.gender.male = false
      this.gender.female = true
      this.gender.secrect = false
    },
    switch3(){
      this.gender.male = false
      this.gender.female = false
      this.gender.secrect = true
    },
    // 设置本地存储
    setLocal: function() {
      this.popupShow = true;
      var selfObj = {
        name: this.nameValue,
        Email: this.emailValue,
        birthday: this.birthdayValue,
        ID: this.IDNumber,
        self: this.selfValue
      };
      localStorage.info = JSON.stringify(selfObj);
    },
    // 获取本地存储作为修改个人中心的默认值
    getLocal: function() {
      if (localStorage.info) {
        this.emailValue = JSON.parse(localStorage.getItem("info")).Email;
        this.nameValue = JSON.parse(localStorage.getItem("info")).name;
        this.birthdayValue = JSON.parse(localStorage.getItem("info")).birthday;
        this.IDNumber = JSON.parse(localStorage.getItem("info")).ID;
        this.selfValue = JSON.parse(localStorage.getItem("info")).self;
      } else {
        this.emailValue = "";
        this.nameValue = "";
        this.birthdayValue = "";
        this.IDNumber = "";
        this.selfValue = "";
      }
    },
    comfirmAdd: function() {
      this.popupShow = false;
      this.$emit("backToMe");
    }
  },
  mounted() {
    this.getLocal();
  }
};
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
.selfInfo {
  position: absolute;
  padding: 10px;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
}
.form-group,
.button-group {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.must {
  color: red;
  font-size: 30px;
  position: absolute;
  top: 10%;
  right: 0;
}
.header {
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
.Choice {
				margin-left: 24px;
				display: inline-block;
				font-size: 0;
				span:first-child {
					border-left: none;
				}
				.checked {
					background: #29C08D;
					color:#fff;
				}
				span {
					display: inline-block;
					width: 40px;
					height: 35px;
					line-height: 35px;
					border: 1px solid #AEAEAE;
					text-align: center;
				}
				span:nth-child(2), span:nth-child(3) {
					border-left: none;
				}
				span:nth-child(1) {
					border-bottom-left-radius: 8px;
					border-top-left-radius: 10px;
				}
				span:nth-child(3) {
					border-bottom-right-radius: 10px;
					border-top-right-radius: 10px;
				}
			}
.header > span:nth-child(1) {
  float: left;
  position: relative;
  left: 5%;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.selSet {
  display: inline-block;
  width: 29.333%;
}
.checked {
	background: #29C08D;
  color:#fff;
}
.sub {
  text-align: center;
}
.sub button {
  width: 95%;
  padding: 15px;
  border-radius: 10px;
  background: #29C08D;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.textcl {
  width: 90%;
  margin-left: 15px;
}
</style>
