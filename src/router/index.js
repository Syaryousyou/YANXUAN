import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Goods from '../pages/Goods/Goods'
import Classify from '../pages/Classify/Classify'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
