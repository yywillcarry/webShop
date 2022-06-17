<template>
  <div id="app">
<headers></headers>
<router-view></router-view>
<footers v-show="$route.meta.show"></footers>
  </div>
</template>

<script>
import Headers from './components/Headers.vue'
import Footers from './components/Footers.vue'
export default {
  name: 'App',
  components: {
   Headers,
   Footers
  },
  mounted(){
     this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>
