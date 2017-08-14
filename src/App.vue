<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import top from './components/header'
import foot from './components/footer'

export default {
  name: 'app',
  components:{
    top,
    foot
  }
}
</script>

<style>
*{
  padding:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  margin:0;

  text-decoration: none;
}
ul,li{list-style: none;}
</style>
