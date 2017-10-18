<template>
  <div class="about">
    {{msg}}
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <a href="javascript:" @click="ajaxData()">跨域请求数据</a>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      msg: 'about',
      checkList: ['选中且禁用','复选框 A'],
      myData:{}
    }
  },
  created(){
    /*this.ajaxData()*/
  },
  methods:{
    ...mapMutations([
      'login'
    ]),
    ...mapActions([
      'changeLogin'
    ]),
    ajaxData(){
      this.$http.get('../../static/txt.json').then(response => {
          console.log(response.data);//需要这样获取到数组
      }, response => {
          console.log("error");
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.about{
		font-size:1.8rem;
	}
</style>