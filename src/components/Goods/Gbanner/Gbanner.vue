<template>
  <div class="gContentBanner">
    <div class="gCBannerWrap">
      <div class="gCBannerContainer swiper-container">
        <ul class="gCBannerWrapper swiper-wrapper">
          <li class="gCBannerSlide swiper-slide" v-for="(item, index) in gbannerInfo" :key="index">
            <div class="gCBannerContent">
              <img class="gCBanImg" :src="item.picUrl" alt="01">
              <div class="gCBanMask">
                <div class="gCBanMaskTitle">- {{item.subTitle}} -</div>
                <div class="gCBanMaskDes">{{item.title}}</div>
                <div class="gCBanMaskSale">{{item.desc}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed: {
      ...mapState(['gbannerInfo'])
    },
    mounted () {
      this.$store.dispatch('getGbanner')
    },
    watch: {
      gbannerInfo (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper ('.gCBannerContainer', {
            initialSlide: 0,
            slidesPerView: 1.15, // 设置slider容器能够同时显示的slides数量
            centeredSlides: true,
            spaceBetween: 30, // 在slide之间设置距离单位为px
            loop: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gContentBanner
    background #fff
    .gCBannerWrap
      width (690/$rem)
      height (433/$rem)
      box-sizing border-box
      padding (24/$rem) 0
      margin 0 (30/$rem)
      background #fff
      .gCBannerContainer
        height 100%
        .gCBannerContent
          height 100%
          position relative
          .gCBanImg
            width 100%
            height 100%
          .gCBanMask
            background rgba(255,255,255,.9)
            width (466/$rem)
            height (198/$rem)
            box-sizing border-box
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            margin auto
            display flex
            flex-flow column
            align-items center
            justify-content center
            .gCBanMaskTitle
              line-height (30/$rem)
              font-size (20/$rem)
              color #7f7f7f
            .gCBanMaskDes
              line-height (48/$rem)
              margin-top (14/$rem)
              color #333
              font-size (32/$rem)
              font-weight 700
            .gCBanMaskSale
              margin-top (4/$rem)
              line-height (36/$rem)
              color #333
              font-size (24/$rem)
</style>
