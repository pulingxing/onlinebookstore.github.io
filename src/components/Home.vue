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
              <li v-for="book in newBook" :key="book.id">
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
        ]
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
        }
    }   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@base-font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
@base-font-size: 16px;
@base-font: normal @base-font-size @base-font-family;
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
            // &.icon-arrow-right {
            //     background: url(../assets/icon-arrow-right.svg) no-repeat center center / 80% 80%;
            // }
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
}
</style>
