// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
