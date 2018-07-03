<template>
  <div class="homepage">
    <Homenav />
    <router-view></router-view>
  </div>
</template>

<script>
import Homenav from '@/components/Homenav'
export default {
  name: 'Homepage',
  data(){
    return {
    }
  },
  components: {
    Homenav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
