<template>
    <div id="app">
      <router-view></router-view>
      <!--<FooterGuide></FooterGuide>-->
      <FooterGuide2 v-show="$route.meta.showerFoot"></FooterGuide2>
    </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide'
import FooterGuide2 from './components/FooterGuide/FooterGuide2'

import Store from './store/index'
export default {
  name: 'App2',
  components: {
    FooterGuide,
    FooterGuide2
  },
  Store
}
</script>

<style scoped>
   #app{
     width:100%;
     height:100%;
     background:#f5f5f5;
     position:relative
   }
</style>
