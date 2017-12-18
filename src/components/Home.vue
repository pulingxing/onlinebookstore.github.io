<template>
  <div class="home">
    
    <!-- banner轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in listImg"  :key="item.id">
                <img :src="item.url" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <!-- 活动通知 -->
    <div class="notice">
      <span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>{{notice}}
    </div>
    <!-- 书籍列表 -->
    <div class="bookList">
      <h2>
          新书上架
          <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
      </h2>
      <div>
          <ul>
              <li v-for="book in newBook" :key="book.id"  @click="showDetail">
                  <img :src="book.photo">
                  <div class="book-name" :title="book.name">{{book.name}}</div>
                  <div class="book-price">{{book.price}}</div>
              </li>
          </ul>
      </div>
      
    </div>
    <div class="bookList">
      <h2>
          热门书籍
          <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
      </h2>
      <div>
          <ul>
              <li v-for="book in hotBook" :key="book.id">
                  <img :src="book.photo">
                  <div class="book-name" :title="book.name">{{book.name}}</div>
                  <div class="book-price">{{book.price}}</div>
              </li>
          </ul>
      </div>
    </div>  
    <!-- 弹出详情页 -->
     
    <div class="detailBox" v-for="item in detailData" :key="item.id" :class="{'show':showBox}">
        <div class="popup">
            <i class="glyphicon glyphicon-remove" aria-hidden="true" @click="showBox=false"></i>
            <div class="popupImgBox">
                <img :src="item.photo" alt="">
            </div>   
            <div class="itemBox">作者：<span class="author">{{item.author}}</span></div>
            <div class="itemBox">页数：<span class="pageNum">{{item.pageNum}}</span></div>
            <div class="itemBox">日期：<span class="date">{{item.date}}</span></div>
            <div class="itemBox">价格：<span class="price">{{item.price}}</span></div>
            <h3 class="name">{{item.name}}</h3>
            <p class="describe">{{item.describe}}</p>
            <div class="stock">
                <span class="leftBox">￥63</span>
                <span class="rightBox">3本</span>
            </div>
            <div class="buy">
                <span class="leftBox">加入购物车</span>
                <span class="rightBox">立即购买</span>
            </div>
        </div>  
    </div>
      
    
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
    name: 'Home', 
    data () {
      return {
        msg: '掌上书城',
        listImg:[
        {url:"../../static/image/0F8F5755BA25AAADBEEC2438BC089062.png"},
        {url:"../../static/image/EE1C1D34F38A8620055F58557510CC62.png"},
        {url:"../../static/image/FB071C143AB303EDB502A408A3E4C269.png"}
        ],
        notice:'双12全场低至1折，更有隐藏神秘惊喜等着你哦!',
        newBook: [
            {
                name: 'JavaScript高级程序设计',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CaeL3lLtL._SX260_.jpg',
                price: 65.30
            },
            {
                name: 'Web前端开发修炼之道',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41OO8kdSuUL._SX260_.jpg',
                price: 41.00
            },
            {
                name: '深入理解ES6',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kEnK%2BWQ-L._SX365_BO1,204,203,200_.jpg',
                price: 68.30
            },
            {
                name: 'JavaScript权威指南',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/516BsgBkUpL.jpg',
                price: 96.50
            },
            {
                name: '高性能JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51T4tGqPRaL._SX396_BO1,204,203,200_.jpg',
                price: 51.30
            },
            {
                name: '码农·JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41ciPk2DBTL.jpg',
                price: 78.90
            }
        ],
        hotBook: [
            {
                name: '局外人',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kKGTD9xCL._AC_SR300,300_.jpg',
                price: 32.28
            },
            {
                name: '解忧杂货铺',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51VNBGrPxVL._AC_SR300,300_.jpg',
                price: 35.10
            },
            {
                name: '瓦尔登湖',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51fSVKt36KL._AC_SR300,300_.jpg',
                price: 68.30
            },
            {
                name: '这么慢那么美',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/510im9j53mL._AC_SR300,300_.jpg',
                price: 96.50
            },
            {
                name: '时间停止的那天',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CVi5j14rL._AC_SR300,300_.jpg',
                price: 51.30
            },
            {
                name: '芳华',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/515Gb0FbIZL._AC_SR300,300_.jpg',
                price: 25.50
            }
        ],
        detailData:[
            {
                "name": "JavaScript高级程序设计",
                "describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
                "author": "Nicholas C. Zakas",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/51CaeL3lLtL._SX260_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
                "describe": "第1版两年内印刷近10次，4家网上书店的评论近4?000条，98%以上的评论全部为5星级的好评，是整个Java图书领域公认的经典著作和超级畅销书，繁体版在台湾也十分受欢迎。第2版在第1版的基础上做了很大的改进：根据最新的JDK 1.7对全书内容进行了全面的升级和补充；增加了大量处理各种常见JVM问题的技巧和实践；增加了若干与生产环境相结合的实战案例；对第1版中的错误和不足之处的修正；等等。第2版不仅技术更新、内容更丰富，而且实战性更强。",
                "author": "周志明",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/41OO8kdSuUL._SX260_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "JavaScript权威指南（第6版）",
                "describe": "本书要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书更适合有一定编程经验的人阅读。对于那些希望学习JavaScript和已经开始使用JavaScript的程序员来说，如果想让自己对JavaScript语言和Web平台的理解和掌握再上一个台阶，本书最适合不过了",
                "author": "David Flanagan",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/51kEnK%2BWQ-L._SX365_BO1,204,203,200_.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            },
            {
                "name": "编写高质量代码：改善Java程序的151个建议",
                "describe": "在通往“Java技术殿堂”的路上，本书将为你指点迷津！内容全部由Java编码的最佳实践组成，从语法、程序设计和架构、工具和框架、编码风格和编程思想五大方面，对Java程序员遇到的各种棘手的疑难问题给出了经验性的解决方案，为Java程序员如何编写高质量的Java代码提出了151条极为宝贵的建议。",
                "author": "秦小波",
                "price":"44.50",
                "photo":"https://images-cn.ssl-images-amazon.com/images/I/516BsgBkUpL.jpg",
                "pageNum":"300",
                "bookNum":"2",
                "date":"2010.2.3"
            }
        ],
        showBox:false,
        showActive:false,
      } 
    },
    mounted() {
            var swiper = new Swiper('.swiper-container', {
                direction :'horizontal',
                // pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
    methods: {
        showDetail(){
            this.showBox=true;
        },
        showColor(){
            this.showActive=true;
        }
    }
    }   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@base-font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
@base-font-size: 16px;
@base-font: normal @base-font-size @base-font-family;
.show{
    display: block;
}
.active{
    background: #29C08D;
}
.home{
    padding: 0;
    margin: 0;
    position:relative;
    height: 100%;
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background: #29C08D;
    color: #ffffff;
    }
  .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination {
            width:100%;
            height: 20px;
            text-align: center;
            
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
  .notice {
    width: 100%;
    height: 30px;
    line-height:30px;
    margin-bottom: 10px;
    overflow: hidden;
    border-top: 1px solid #9a8d8d;
    border-bottom:1px solid #9a8d8d;
    animation: textmove 3s infinite;
    span {
      line-height: 30px;
      font-size: 18px;
      color: #edff00;
      margin: 0 10px;
      animation: notice 3s infinite;
        }
    @keyframes notice {
        0%{color: #edff00; } 
        100%{color: red; } 
    } 
    }
    @keyframes textmove {
        0%{color: #aaa; } 
        100%{color: red; } 
    }
  .title {
    font-size: 18px;
    }
  .bookList{
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    overflow: hidden;
    h2 {
        font: @base-font;
        font-weight: bold;
        position: relative;
        margin: 0;
        padding: 0;
        span {
            width: 20px; 
            line-height: 21px;
            position: absolute;
            right: 0px;     
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 33%;
            padding: 10px 0;
            font: @base-font;
            font-size: @base-font-size * 0.8;
            img {
                max-width: 96%;
                height: 125px;
                display: block;
                margin: 0 auto;
            }
            .book-name {
                width: 90%;
                margin: 5px auto;
                word-break: break-all;
                color: #066bc5;
                
            }
            .book-price {
                width: 90%;
                margin: 5px auto;
                color: #b2240c;  
            }
        }
    }
}
  .detailBox{
        position: absolute;
        display: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 95%;
        height: 95%;
        border: 1px solid #aaa;
        background: #ffffff;
        z-index: 100;
        .popup{
            position: relative;
            width: 100%;
            padding: 20px;
            height: 100%;
            i{
                position: absolute;
                width: 20px;
                height: 20px;
                top: 5px;
                right: 5px;
                text-align: center;
                line-height: 20px;
            }
            .popupImgBox{
                position: absolute;
                width: 30%;
                height: 120px;
                border: 1px solid #aaa;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .itemBox{
                margin-left: 35%; 
                margin-bottom: 10px;
                color: #aaa;
                span {
                    position: absolute;
                    // right: 20px;
                    margin-bottom: 10px;
                    display: inline-block;
                    width: 40%;
                    color: #333;
                    &.price{
                        color:red;
                    }
                    }
                }
                h3{ 
                    margin: 10px auto;
                    top:140px;
                    font-size: 18px; 
                    font-weight: bold;
                }
                p{    
                    display: block;
                    margin: 0 auto;
                    top:160px;
                    font-size: 18px;
                    height: 200px;
                    line-height: 30px; 
                    overflow: hidden;
                    overflow-y: scroll;
                }
                .stock {
                    width: 100%;
                    height: 50px;
                    margin-top: 20px;
                    // border-top:1px solid #aaa;
                    // border-bottom:1px solid #aaa;
                    display: flex;
                    justify-content: space-between;
                    span{
                        line-height: 50px;
                        text-align: center;
                        width: 200px;
                        border:1px solid #aaa;
                        
                    }
                    .leftBox:hover{
                            background: #29C08D;
                            
                        }
                    .rightBox:hover {
                            background: #29C08D;
                        }
                }
                .buy {
                    width: 100%;
                    height: 50px;
                    margin-top: 20px;
                    // border-top:1px solid #aaa;
                    // border-bottom:1px solid #aaa;
                    display: flex;
                    justify-content: space-between;
                    span{
                        line-height: 50px;
                        text-align: center;
                        width: 200px;
                        border:1px solid #aaa; 
                    }
                    .leftBox:hover{
                            background: #29C08D;
                            
                        }
                    .rightBox:hover {
                            background: #29C08D;
                        }
                }
            
        }

    }
  
}
</style>
