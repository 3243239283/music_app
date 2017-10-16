<template>
  <div class="header">
    <router-link to="./home">首页</router-link>
    <router-link to="./about">关于我们</router-link>
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
<style lang="less" scoped>
	.header{
		font-size:1.8rem;
		display: -webkit-flex; /* Safari */
  		display: flex;
		a{
			flex:1;
			line-height:3rem;
		}
	}
</style>