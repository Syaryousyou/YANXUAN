<template>
  <div>
    <header class="gHeader">
      <div class="gHeaderLeft">
        <i class="home" @click="$router.push('/msite')"></i>
      </div>
      <div class="gHeaderTitle">
        <i class="logo"></i>
      </div>
      <div class="gHeaderRight">
        <i class="search"></i>
        <i class="cart" @click="$router.push('/shopcart')"></i>
      </div>
    </header>
    <div class="gContent">
      <Gbanner/>
      <Garticle/>
      <Grecommend/>
      <Gtenfiften/>
      <Gzhen/>
      <Gyxlook/>
      <div class="gCLookMore">
        <div class="gCLookMoreHd">
          <div class="gCLookMoreHdTitle">更多精彩</div>
        </div>
        <GfindMore/>
      </div>
    </div>
    <MsiteGoToTop/>
  </div>
</template>
<script>
  import Gbanner from '../../components/Goods/Gbanner/Gbanner'
  import Garticle from '../../components/Goods/Garticle/Garticle'
  import Grecommend from '../../components/Goods/Grecommend/Grecommend'
  import Gtenfiften from '../../components/Goods/Gtenfiften/Gtenfiften'
  import Gzhen from '../../components/Goods/Gzhen/Gzhen'
  import Gyxlook from '../../components/Goods/Gyxlook/Gyxlook'
  // const GfindMore = () => import('../../components/Goods/GfindMore/GfindMore')
  import GfindMore from '../../components/Goods/GfindMore/GfindMore'
  import MsiteGoToTop from '../../components/MsiteGoToTop/MsiteGoToTop'
  export default {
    mounted () {
      /* eslint-disable no-new */
      // new Swiper ('.gTenFifteenContainer', {
      //   initialSlide: 0,
      //   slidesPerView: 'auto'
      // })
      // this.$store.dispatch('getFindMoreInfo')
    },
    components: {
      Gbanner,
      Garticle,
      Grecommend,
      Gtenfiften,
      Gzhen,
      Gyxlook,
      GfindMore,
      MsiteGoToTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .gHeader
    width 10rem
    height (87/$rem)
    background #fff
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    box-sizing border-box
    padding 0 (16/$rem) 0 (24/$rem)
    position fixed
    top 0
    left 0
    z-index 3
    &>div
      font-size 0
      /*display inline-block*/
    .gHeaderLeft
      .home
        display inline-block
        width (48/$rem)
        height (44/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-74/$rem)
    .gHeaderTitle
      width (172/$rem)
      height (54/$rem)
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto
      .logo
        display inline-block
        width (172/$rem)
        height (54/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-128/$rem)
    .gHeaderRight
      .search
        display inline-block
        width (64/$rem)
        height (64/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-334/$rem)
        margin-right (20/$rem)
      .cart
        display inline-block
        width (64/$rem)
        height (64/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 0
  .gContent
    padding (87/$rem) 0 (97/$rem) 0
    .gCLookMore
      margin 0 (30/$rem) (30/$rem) (30/$rem)
      .gCLookMoreHd
        height (140/$rem)
        display flex
        flex-flow row nowrap
        align-items center
        &::after,&::before
          display block
          content ''
          width (264/$rem)
          height 1px
          background #d9d9d9
        .gCLookMoreHdTitle
          margin 0 (24/$rem)
          font-size (28/$rem)
          color #333
</style>
