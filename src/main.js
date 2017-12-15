// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import login from './js/login'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import swiper from 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
