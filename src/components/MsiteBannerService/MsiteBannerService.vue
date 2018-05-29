<template>
  <div class="service">
    <ul class="list">
      <li class="item" v-for="(ser, index) in serviceInfo" :key="index">
        <a href="javascript:;">
          <i class="servicePolicy" :style="{backgroundImage: `url($(ser.icon))`}"></i>
          <span class="serviceName">{{ser.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['serviceInfo'])
    },
    mounted () {
      // 轮播图信息请求
      this.$store.dispatch('getMServiceInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
</style>
