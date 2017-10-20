<template>
  <div id="app">
    <m-header></m-header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
//引入头部组建
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
  name: 'app',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
</style>
