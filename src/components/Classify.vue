<template>
  <div class="classify">
    <div class="input-group search-tools"
      placeholder="请输入图书名称或者书籍的作者进行搜索" 
      @search="searchBook" 
    >
      <input type="search" class="form-control" :placeholder="placeholder" @keyup="$emit('search',$event.target.value)">
      <span class="glyphicon glyphicon-search"></span>
    </div>
    
    <div class="book-lists"
      :th-info="thItem" 
      :book-info="bookFilter" 
      :noMatching="notFindMatch"
    >
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

<script src="../js/classify.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
  
}
</style>
