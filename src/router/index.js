import Vue from 'vue'
import Router from 'vue-router'

//组件定义
import Recommend from '../../src/components/recommend/recommend'
import Singer from '../../src/components/singer/singer'
import Rank from '../../src/components/rank/rank'
import Search from '../../src/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/recommend',
    	component:Recommend
    },
    {
    	path:'/singer',
    	component:Singer
    },
    {
    	path:'/rank',
    	component:Rank
    },
    {
    	path:'/search',
    	component:Search
    }
  ]
})