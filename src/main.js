// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

 import './assets/css/all.css'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import $ from 'jquery'
import './assets/js/layui.all'
import './assets/js/layer.js'
import './assets/css/layui.css'
// import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h){
    return h(App)
  }
});
