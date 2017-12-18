<template>
  <div class="classify">
    <div class="input-group search-tools">
      <input type="search" placeholder="请输入图书名称或者书籍的作者进行搜索">
      <span class="glyphicon glyphicon-search"></span>
    </div>
    
    <div class="book-lists" >
      <ul>
        <li v-for="list in bookList" :key="list.id" @click="showDetial">
          <div class="imgbox"><img :src="list.photo" alt=""></div>
          <span class="book-name" :title="list.name">{{list.name}}</span>
          <span class="book-author">{{list.author}}</span>
          <span class="book-price">{{list.price}}</span>
          <span class="glyphicon glyphicon-menu-right font" aria-hidden="true"></span>
        </li>
      </ul>
    </div>
    <span class="loadMore">加载更多</span>
    <!-- 详情页 -->
    <div class="detailBox" v-for="item in detailData" :key="item.id" :class="{'show':showBox}">
      <h1 class="header">商品详情
          <span class="glyphicon glyphicon-menu-left back" aria-hidden="true" @click="showBox=false"></span>
      </h1>
      <div class="popup">
          
          <div class="popupImgBox">
              <img :src="item.photo" alt="">
          </div>   
          <div class="itemBox">作者：<span class="author">{{item.author}}</span></div>
          <div class="itemBox">页数：<span class="pageNum">{{item.pageNum}}</span></div>
          <div class="itemBox">日期：<span class="date">{{item.date}}</span></div>
          <div class="itemBox">价格：<span class="price">{{item.price}}</span></div>
          <h3 class="name">{{item.name}}</h3>
          <div class="buy">
              <span class="leftBox">加入购物车</span>
              <span class="rightBox">立即购买</span>
          </div>
          <p class="describe">{{item.describe}}</p>
          <p class="describe">{{item.describe}}</p>
          <p class="describe">{{item.describe}}</p>
         
      </div>  
    </div>

  </div>
</template>

<script src="../js/classify.js"></script>

<style scoped lang="less">
  .show{
    display: block;
  }
  .classify {
    @theme-color: rgb(100, 90, 82);
    padding: 0;
    margin: 0;
    position:relative;
    height: 100%;
    .search-tools {
      width: 100%;
      padding: 10px 5px; 
      input {
        width: 100%;
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
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
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
    .detailBox{
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #aaa;
        background: #ffffff;
        z-index: 100;
        overflow-y: auto;
        .header {
            font-size: 16px;
            font-weight: bold;
            color: #3d3c3c;
            padding: 10px;
          }
        .back {
            position: absolute;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            top: 0;
            left: 0;
            font-size: 16px;  
          }  
        .popup{
            position: relative;
            width: 100%;
            padding: 20px;
            height: 100%;
             
            i {
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
                    border: 1px solid #aaa;
                    margin-bottom: 10px;
                }
                .buy {
                    width: 100%;
                    height: 50px;
                    margin-top: 20px;
                    margin-bottom:10px;
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
