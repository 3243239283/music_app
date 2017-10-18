import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from '../router'

const state = {			//状态对象
	login:{
		isActive:1
	}
}
const mutations = {
	changeLogin({login},prop){
		login[prop.key] = prop.val;
	}
}
const getters = {		//计算state
}

const actions = {		//异步触发状态
}


export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})