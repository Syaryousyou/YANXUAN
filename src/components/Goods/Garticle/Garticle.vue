<template>
  <div class="gCArticle">
    <div class="gCArticleContainer swiper-container">
      <ul class="gCArticleWrapper swiper-wrapper">
        <li class="gCArticlerSlide swiper-slide" v-for="(item, index) in articleInfo" :key="index">
          <div class="gCArticlerSlideTop"
          :style="{backgroundImage: `url(${item.picUrl})`}"></div>
          <div class="gCArticlerSlideCount"><span>{{item.articleCount}}</span></div>
          <div class="gCArticlerSlideTitle">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed: {
      ...mapState(['articleInfo'])
    },
    mounted () {
      this.$store.dispatch('getGrecommend')
    },
    watch: {
      articleInfo (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper ('.gCArticleContainer', {
            initialSlide: 0,
            slidesPerView: 'auto'
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gCArticle
    box-sizing border-box
    height (286/$rem)
    background #fff
    padding (32/$rem) (30/$rem) (28/$rem) (30/$rem)
    margin-bottom (20/$rem)
    .gCArticlerSlide
      width (164/$rem)
      height (210/$rem)
      margin-right (24/$rem)
      background #fff
      position relative
      .gCArticlerSlideTop
        width (164/$rem)
        height (164/$rem)
        margin-bottom (20/$rem)
        border-radius (4/$rem)
        background-position center
        background-size cover
      .gCArticlerSlideCount
        width (150/$rem)
        height (32/$rem)
        color #f4f4f4
        font-size (24/$rem)
        line-height (32/$rem)
        position absolute
        top 0
        left (8/$rem)
        text-align right
        background-image url("./images/article/bg.png")
        background-size 100%
      .gCArticlerSlideTitle
        font-size (24/$rem)
        color #333
        text-align center
        height (24/$rem)
        line-height (24/$rem)
</style>
