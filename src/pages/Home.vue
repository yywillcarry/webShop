<template>
  <div>
     <type-nav></type-nav>
     <list-container></list-container>
     <recommend></recommend>
     <rank></rank>
     <like></like>
     <floor v-for="floor in floorList" :key="floor.id" :list="floor"></floor>
  
     <brand></brand>
  </div>
</template>

<script>
import ListContainer from '@/components/ListContainer'
import Recommend from '@/components/Recommend'
import Rank from '@/components/Rank'
import Like from '@/components/Like'
import Floor from '@/components/Floor'
import Brand from '@/components/Brand.vue'
import {mapState} from 'vuex'
export default {
  name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted(){
      this.$store.dispatch('getFlorrList')
   this.$store.dispatch("getUserInfo");
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
}
   
</script>

<style>

</style>