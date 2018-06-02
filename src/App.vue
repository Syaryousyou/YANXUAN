<template>
  <div id="app">
    <!--缓存路由组件对象-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
</style>
