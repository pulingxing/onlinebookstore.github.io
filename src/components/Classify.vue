<template>
  <div class="classify">
    <h1 class="header">{{msg}}</h1>
    <div class="input-group search-tools">
      <input type="text" class="form-control" :placeholder="placeholder" @keyup="$emit('search',$event.target.value)">
      <span class="glyphicon glyphicon-search"></span>
    </div>
    <div class="book-lists">
      <ul>
        <li v-for="list in bookList" :key="list.id">
          <div class="imgbox"><img :src="list.photo" alt=""></div>
          <span class="book-name" :title="list.name">{{list.name}}</span>
          <span class="book-author">{{list.author}}</span>
          <span class="book-price">{{list.price}}</span>
          <span class="glyphicon glyphicon-menu-right font" aria-hidden="true"></span>
        </li>
      </ul>
    </div>
    <span class="loadMore">加载更多</span>

  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {
      msg: '分类',
      bookList: [
            {
                name: 'JavaScript高级程序设计',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CaeL3lLtL._SX260_.jpg',
                price: '￥65.30',
                author: "Nicholas C. Zakas",
            },
            {
                name: 'Web前端开发修炼之道',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41OO8kdSuUL._SX260_.jpg',
                price: '￥41.00',
                author: "周志明"
            },
            {
                name: '深入理解ES6',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kEnK%2BWQ-L._SX365_BO1,204,203,200_.jpg',
                price: '￥68.30',
                author: "David Flanagan",
            },
            {
                name: 'JavaScript权威指南',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/516BsgBkUpL.jpg',
                price: '￥96.50',
                author: "David Flanagan",
            },
            {
                name: '高性能JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51T4tGqPRaL._SX396_BO1,204,203,200_.jpg',
                price: '￥51.30',
                author: "秦小波",
            },
            {
                name: '码农·JavaScript',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/41ciPk2DBTL.jpg',
                price: '￥78.90',
                author: "秦小波",
            },
            {
                name: '局外人',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51kKGTD9xCL._AC_SR300,300_.jpg',
                price: '￥32.28',
                author: "秦小波",
            },
            {
                name: '解忧杂货铺',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51VNBGrPxVL._AC_SR300,300_.jpg',
                price: '￥35.10',
                author: "秦小波",
            },
            {
                name: '瓦尔登湖',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51fSVKt36KL._AC_SR300,300_.jpg',
                price: '￥68.30',
                author: "秦小波",
            },
            {
                name: '这么慢那么美',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/510im9j53mL._AC_SR300,300_.jpg',
                price: '￥96.50',
                author: "秦小波",
            },
            {
                name: '时间停止的那天',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/51CVi5j14rL._AC_SR300,300_.jpg',
                price: '￥51.30',
                author: "秦小波",
            },
            {
                name: '芳华',
                photo: 'https://images-cn.ssl-images-amazon.com/images/I/515Gb0FbIZL._AC_SR300,300_.jpg',
                price: '￥25.50',
                author: "秦小波",
            }
        ]
   
  }
  // computed: {
  //   bookLength() {
  //     return this.bookFilter.length;
  //   }
  //   bookFilter() {
  //     if(!this.matching) {

  //     }
  //   }

  // }
  // methods:{

  //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classify {
@theme-color: rgb(100, 90, 82);
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
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    }
  .search-tools {
    width: 100%;
    padding: 10px 5px; 
    input {
      height: 40px;
      border-radius: 30px;
    }
    span {
      position: absolute;
      right:20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      } 
  }
  .book-lists {
    width: 100%;
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        width: 100%;
        height: 120px;
        padding: 10px;
        border-bottom: 1px solid #aaa;
        position: relative;
        .imgbox {
          width: 20%;
          height: 90%;
          display: inline-block;
          img{
            width: 100%; 
            height: 100%;
          }
        }
        span {
          position: absolute;
          &.book-name {
            top: 20px;
            left:25%;
          }
          &.book-author {
            top:50px;
            left:25%;
          }
          &.book-price {
            left: 25%;
            top: 80px;
            color:red;
          }
          &.font {
            top: 50%;
            transform: translateY(-50%);
            right:10px;
            color:#aaa;
          }
        
        }
      }
    }
  }
  .loadMore {
    display: inline-block;
    width: 100%;
    line-height: 40px;
    text-align: center;
  }
  
}
</style>
