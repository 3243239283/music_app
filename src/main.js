import 'babel-polyfill'
import fastclick from 'fastclick'
fastclick.attach(document.body)  // 解决移动端点击延迟300毫秒

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

/* 全局css/js/styl文件引入 */
import './common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
