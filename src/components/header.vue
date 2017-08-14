<template>
  <div class="header">
    <router-link to="./home"><li>首页</li></router-link>
    <router-link to="./about"><li>关于我们</li></router-link>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
	name: 'header',
	data () {
		return {
	  		msg: 'header'
		}
	},
	computed:{
	    ...mapState([
	    ])
	},
    methods:{
        ...mapMutations([

        ]),
        ...mapActions([
            
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li{display:inline-block;}
</style>