<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import home from '../page/home'
import about from '../page/about'

export default {
  name: 'hello',
  components:{
      home,
      about
  },
  data () {
    return {
      msg: 'this is happy.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
