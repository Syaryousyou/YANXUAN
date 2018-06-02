import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Goods from '../pages/Goods/Goods'
// import Classify from '../pages/Classify/Classify'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'
// 路由组件懒加载
const Classify = () => import('../pages/Classify/Classify')
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/goods',
      component: Goods,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
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
