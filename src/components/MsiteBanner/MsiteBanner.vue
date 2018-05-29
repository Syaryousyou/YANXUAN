<template>
  <div class="slide">
      <div class="slideService-container swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in bannerInfo" :key="index">
            <img class="bannerImg" :src="item.picUrl" alt="01">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination mySwiperPagination"></div>
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['bannerInfo'])
    },
    mounted () {
      // 轮播图信息请求
      this.$store.dispatch('getBannerInfo')
    },
    watch: {
      bannerInfo (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.slideService-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
  .slide
    height (400/rem)
    .swiper-container
      &>.mySwiperPagination
        bottom (30/rem)
        font-size 0
        .swiper-pagination-bullet
          width (50/rem)
          height (4/rem)
          display: inline-block;
          background: #fff;
          opacity: .4;
          margin-right (10/rem)
        .swiper-pagination-bullet-active
          opacity 1
      .swiper-wrapper
        width 100%
        height (400/rem)
        .swiper-slide
          .bannerImg
            width 100%
            height 100%

</style>
