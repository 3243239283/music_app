// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false

//vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource);

// vuex
import Vuex from 'vuex'
Vue.use(Vuex);

//import '../theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import App from './App'
import router from './router'
import store from './store'

//全局css/js
import "./assets/css/reset.css"
import "./assets/css/main.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
