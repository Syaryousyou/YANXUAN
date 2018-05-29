<template>
  <div class="topics">
    <header class="topicHeader">
      <a href="javascript:;" class="topicClick">
        <span>专题精选</span>
        <i></i>
      </a>
    </header>
    <div class="topicSlide">
      <div class="topicSlide-container swiper-container">
        <ul class="topicList swiper-wrapper">
          <li class="topicItem swiper-slide" v-for="(t, index) in topicList" :key="index">
            <a class="topicA" href="javascript:;">
              <img :src="t.itemPicUrl" alt="01">
            </a>
            <div class="topicDes">
              <h4 class="topicDesTitle ellipsis">{{t.title}}</h4>
              <span class="topicPrice">
                  <span>{{t.priceInfo}}元起</span>
                </span>
            </div>
            <div class="topicDesPlus ellipsis">
              {{t.subtitle}}
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
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(['topicList'])
    },
    mounted () {
      this.$store.dispatch('getTopicList')
    },
    watch: {
      topicList (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.hotInner', {
            initialSlide: 0,
            slidesPerView: 'auto',
            autoHeight: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
  .topics
    margin-bottom (20/rem)
    background #fff
    .topicHeader
      height (110/rem)
      font-size (32/rem)
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      .topicClick
        display flex
        align-items center
        flex-flow row nowrap
        color #333
        vertical-align middle
        i
          display inline-block
          vertical-align middle
          background-image url("/images/supply/supplyMore.png")
          background-repeat no-repeat
          background-size 100% 100%
          width (30/rem)
          height (30/rem)
          margin-left (10/rem)
    .topicSlide
      padding 0 (30/rem) (36/rem) (30/rem)
      overflow hidden
      .topicSlide-container
        overflow visible
        .topicList
          width (575/rem)
          .topicItem
            margin-right (20/rem)
            .topicA
              display block
              width (575/rem)
              height (322/rem)
              margin-bottom (16/rem)
              border-radius (8/rem)
              overflow hidden
              img
                width 100%
                height auto
                position relative
                left 50%
                transform translateX(-50%)
            .topicDes
              height (41/rem)
              margin-bottom (2/rem)
              .topicDesTitle
                float left
                font-size (28/rem)
                width (410/rem)
              .topicPrice
                float right
                font-size (28/rem)
                color #b4282d
            .topicDesPlus
              width (575/rem)
              font-size (24/rem)
              color #7F7F7F
</style>
