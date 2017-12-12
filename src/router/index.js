import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Cart from '@/components/Cart'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/Me',
      name: 'me',
      component: Me
    },
  ]
})
