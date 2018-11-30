// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/jquery-1.8.3.min.js'
// import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//引入原版layui
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
