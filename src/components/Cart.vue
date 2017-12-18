<template>
  <div class="cart">
    <!-- 购物车列表 -->
    <div class="cartList">
      <ul>
        <li v-for="item in cartList" :key="item.id">
          <div class="checkbox"  :class="{'checked':item.checked}" @click="selectedProduct(item)">
          </div>
          <div class="imgbox"><img :src="item.photo" alt=""></div>
          <span class="book-name">{{item.name}}</span>
          <span class="book-author">{{item.author}}</span>
          
          <div class="add-reduce">   
            <button class="add" type="button" @click="changeMoney(item,1)">+</button>   
            <div class=" amount">
              <input class="number" type="text"  v-model="item.productQuantity"  value="0"> 
            </div> 
            <button class="reduce" type="button" @click="changeMoney(item,-1)">-</button>   
          </div>
          <span class="totalPrice">{{item.price*item.productQuantity}}</span>
          <!-- 删除按钮 -->
          <span class="glyphicon glyphicon-trash delete" aria-hidden="true" @click="delConfirm(item)"></span>
        </li>
      </ul>
    </div>
    <!-- 结算按钮 -->
    <div class="cart-foot">
      <div class="checkAll" :class="{'checked':checkAllFlag}" @click="checkAll(true)"></div>
      <span class="selectAll">全选</span>
      <div class="item-total">合计: <span class="total-price">{{totalMoney}}</span></div>
      <div class="settlement" @click="payshow">结算</div>  
    </div>
    <!-- 删除弹出框 -->
    <div class="mask" :class="{'show':delShow}">
      <div class="confirmbox">
        <span class="title">你确认删除改商品！</span>
        <div class="confirm">
          <button  class="sure" @click="delProduct">确认</button>
          <button class="cacle" @click="delShow=false">取消</button>
          </div>
      </div>
    </div>
    <!-- 支付中心 -->
    <div class="pay" :class="{'show':payShow}">
      <h1 class="header">支付中心
        <span class="glyphicon glyphicon-menu-left back" aria-hidden="true" @click="payShow=false"></span>
      </h1>
      <h2>商品详细信息</h2>
      <div class="goodsDetail">
        <ul>
          <li class="priceMsg">
            <h3>商品信息</h3>
            <span>商品总价:</span>
            <span class="totalMoney">{{totalMoney+'元'}}</span>
            <span>运输费：</span>
            <span class="transMoney">15元</span>
            <span class="total">消费总计：</span>
            <span class="allMoney">{{totalMoney+15+'元'}}</span>
          </li>
          <li class="acceptMsg">
            <h3>收货信息</h3>
            <span class="address">收货地址：</span>
            <span>收货人：</span>
            <span>邮编：</span>
            <span>电话：</span>   
          </li>
          <li class="modifyAddress address" @click="modifyAddress">修改地址<i class="glyphicon glyphicon-menu-right"></i></li>
          <li class="addAdderss address">新增地址<i class="glyphicon glyphicon-menu-right"></i></li>
        </ul>
      </div>
      <!-- 修改地址 -->
      <div class="changeAddress" :class="{'show':addressShow}">
        <h1 class="header">修改地址
          <span class="glyphicon glyphicon-menu-left back" aria-hidden="true" @click="addressShow=false"></span>
        </h1>
        <form>
          <div class="name">
            <label>姓名：</label>
            <input type="text" placeholder="请填写您的姓名!">
          </div>
          <div class="number">
            <label>电话：</label>
            <input type="text" placeholder="请填写您的姓名!">
          </div>
          <div class="postal">
            <label>邮政编码：</label>
            <input type="text" placeholder="请填写您的姓名!">
          </div>
          <div class="place" v-for="list in place" :key="list.id">
            <select>
              <option>四川省</option>
              <option>云南省</option>
              <option>安徽省</option>
              <option>湖南省</option>
            </select>
            <select>
              <option v-for="city in list.city" :key="city.id">{{city.name}}</option>
            </select>
            <select>
              <option>高新区</option>
              <option>青羊区</option>
              <option>天府新区</option>
              <option>武侯区</option>
            </select>
          </div>
          
        </form>
      </div>
      <!-- <div class="increaseAddress" :class="{'show':addressShow}"></div> -->

      <!-- 支付方式 -->
      <h2>选择支付方式</h2>  
      <div class="payWay">
        <ul>
          <li>
            <div class="icon"><img src="../../static/image/weixin.png" alt=""></div>
            <span>微信支付</span>
            <i class="glyphicon glyphicon-menu-right"></i>
          </li>
          <li>
            <div class="icon"><img src="../../static/image/alipay.png" alt=""></div>
            <span>支付宝支付</span>
            <i class="glyphicon glyphicon-menu-right"></i>
          </li>
          <li>
            <div class="icon"><img src="../../static/image/card.png" alt=""></div>
            <span>银行卡</span>
            <i class="glyphicon glyphicon-menu-right"></i>
          </li>
          <li>
            <div class="icon"><img src="../../static/image/xinyongka.png" alt=""></div>
            <span>信用卡</span>
            <i class="glyphicon glyphicon-menu-right"></i>
          </li>
          <li>
            <div class="icon"><img src="../../static/image/visa.png" alt=""></div>
            <span>VISA</span>
            <i class="glyphicon glyphicon-menu-right"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script src="../js/cart.js"></script>
<style scoped lang="less">
 @import "../styles/cart";
 @import "../styles/pay";  
</style>
