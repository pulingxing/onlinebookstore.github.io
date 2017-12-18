export default {
    name: 'Cart',
    data () {
      return {
        msg: '购物车',
        cartList:[],
        checkAllFlag:false,
        totalMoney:0,
        curProduct:'',
        delShow:'',
        payShow:false,
        addressShow:false,
        place:[
            { "province": "四川", "city":[
                {"name":"成都", 
                "area":[
                    {
                    "name":"青羊区",
                    "name":"锦江区",
                    "name":"金牛区",
                    "name":"武侯区",
                    "name":"成华区",
                    "name":"其他"
                    }
                ]
            },
                
                {"name":"自贡", 
                "area":[
                    {
                    "name":"大安区",
                    "name":"自流井区",
                    "name":"贡井区",
                    "name":"沿滩区",
                    "name":"荣县",
                    "name":"富顺县",
                    "name":"其他"}
                    ]
                }
                
                ]},
        ]
        
      }
    },
    methods:{
        getData() {  
            // 使用axios进行数据请求
            axios.get("../../static/cart.json")
            .then((res)=> {
                this.cartList = res.data;
            })
            .catch(function(){
                console.error('数据请求错误');
            });
        },
        changeMoney( product, way ) {
            if(way>0){
                product.productQuantity++;
            }else {
                product.productQuantity--;
                // 防止为负数
                if(product.productQuantity<1) product.productQuantity=1
            }
            this.calcTotalPrice();
        },
        selectedProduct(item) {
           if(typeof item.checked == 'undefined'){
                this.$set(item,'checked',true);
            }else {
                item.checked = !item.checked; // 有了之后 点击是false
            }
            this.calcTotalPrice();        
        },
        checkAll() {
            this.checkAllFlag = !this.checkAllFlag;
            var _this = this;
            this.cartList.forEach(function(item,index)  {
                if(typeof item.checked == 'undefined'){
                    _this.$set(item,'checked',_this.checkAllFlag);
                }else {
                    item.checked = _this.checkAllFlag;
                } 
            })
            this.calcTotalPrice();
        },
        calcTotalPrice() {
            this.totalMoney = 0 ; // 每一次执行之后把总金额清零
            this.cartList.forEach((item,index)=>{
                if(item.checked){
                    this.totalMoney+= item.price*item.productQuantity;
                }
            })
        },
        delConfirm(item){
            this.delShow = true;
            this.curProduct = item;
            // console.log(this);
        },
        delProduct() {
            // this.delProduct.$delete(this.curProduct); vue1.0的版本 现在不支持了
            let index = this.cartList.indexOf( this.curProduct);
            this.cartList.splice(index,1);
            this.delShow= false;
        },
        payshow(){
            this.payShow=true;
        },
        modifyAddress(){
            this.addressShow=true;
        }
        
    },
    mounted(){
        this.getData();
    }
    
    
  }