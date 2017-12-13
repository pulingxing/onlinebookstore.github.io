

export default {
    name: 'Me',
    data() {
        return {
            msg: '我',
            selected:true,
            formStyle:{},
            phone:'',
            phoneError: false,
            password:'',
            passError:false,
            repassword:'',
            repassError:false,

        }
    },
    methods:{
        //表单切换
        showForm() {
            this.selected = !this.selected;
            this.formStyle={"border-bottom":"1px solid #29C08D"}
            this.formStyle={"border-bottom":"1px solid #29C08D"}

        },
//表单验证
        //注册
        //正则验证手机号：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
        phoneValid(){
            if(this.phone === '') {
                this.phoneError = true;
            }
            else if(!/^1\d{10}$/.test(this.phone)) {
                this.phoneError = true;
            }
            else {
                this.phoneError = false;
            }
        },
        //正则验证密码：^[a-zA-Z]\w{5,17}$
        passValid(){
            if(this.password === '') {
                this.passError = true;
            }
            else if(!/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
                this.passError = true;
            }
            else {
                this.passError = false;
            }

        },  //两次密码要一致
        repassValid(){
            if(this.password === this.repassword) {
                this.repassError = false;
            }
            else {
                this.repassError = true;
            }
        },
        //全都验证成功，点击注册——本地存储并跳转到登录
        formSubmit(){
            if ((this.repassError = false) && (this.passError = false)&&(this.passError = false)){
                //本地存储
                const phone = localStorage.getItem("phone");
                const password = localStorage.getItem("password");

            }else {
                return false;
            }
        }


        //登录
        //点击登录——和保存的都相同，跳转



    }

}
