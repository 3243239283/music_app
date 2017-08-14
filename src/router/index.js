import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

//页面
import home 	from 	'../page/home'
import about 	from 	'../page/about'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
  		path: '/home',
  		name: 'home',
  		component: home
	},{
  		path: '/about',
  		name: 'about',
  		component: about
	}
  ]
})
