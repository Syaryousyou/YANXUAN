<template>
  <div>
    <header class="msiteHeader">
      <div class="headerTop">
        <span class="logo"></span>
        <div class="search">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共9765款好物</span>
        </div>
      </div>
      <div class="hesderBottom">
        <div class="list">
          <div class="item">
            <span class="text active">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">推荐</span>
          </div>
          <div class="item">
            <span class="text">特色区</span>
          </div>
        </div>
      </div>
    </header>
    <div class="msiteContent">
      <div class="slide_service">
        <MsiteBanner/>
        <MsiteBannerService/>
      </div>
      <MsiteBrandSupply/>
      <MsiteNewItem/>
      <MsiteHotItem/>
      <MsiteFlash/>
      <div class="sale">
        <a class="saleClick" href="javascript:;"></a>
      </div>
      <MsiteTopic/>
      <goodGrid/>
      <div class="msiteFooter">
        <div class="footerContent">
          <div class="button">
            <a href="javascript:;" class="goToBtns downloadBtn">
              下载app
            </a>
            <a href="javascript:;" class="goToBtns toPcBtn">
              电脑版
            </a>
          </div>
          <p class="copyright">
            <span>网易公司版权所有 © 1997-2018</span><br>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>
    </div>
    <a class="newUserEntrance" href="javascript:;">
      <i></i>
    </a>
    <i class="goToTop"></i>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import MsiteBanner from '../../components/MsiteBanner/MsiteBanner'
  import MsiteBannerService from '../../components/MsiteBannerService/MsiteBannerService'
  import MsiteBrandSupply from '../../components/MsiteBrandSupply/MsiteBrandSupply'
  import MsiteNewItem from '../../components/MsiteNewItem/MsiteNewItem'
  import MsiteHotItem from '../../components/MsiteHotItem/MsiteHotItem'
  import MsiteFlash from '../../components/MsiteFlash/MsiteFlash'
  import MsiteTopic from '../../components/MsiteTopic/MsiteTopic'
  import goodGrid from '../../components/goodGrid/goodGrid'
  export default {
    mounted () {
      /* eslint-disable no-new */
      new BScroll('.hesderBottom', {
        scrollX: true,
        click: true
      })
    },
    // computed: {
    //   ...mapState('cateList')
    // },
    components: {
      MsiteBanner,
      MsiteBannerService,
      MsiteBrandSupply,
      MsiteNewItem,
      MsiteHotItem,
      MsiteFlash,
      MsiteTopic,
      goodGrid
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
  .msiteHeader
    background #fff
    position fixed
    left 0
    top 0
    z-index 5
    width 100%
    .headerTop
      padding (16/rem) (30/rem)
      display flex
      flex-flow row nowrap
      align-items center
      .logo
        width (138/rem)
        height (40/rem)
        background-image url("./images/logo.png")
        margin-right (20/rem)
      .search
        flex-grow 1
        height (56/rem)
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        background #ededed
        border-radius (8/rem)
        font-size (28/rem)
        .icon
          display inline-block
          width (28/rem)
          height (28/rem)
          background-image url("./images/search.png")
          margin-right (10/rem)
          vertical-align middle
        .placeholder
          color #666
          vertical-align middle
          line-height (42/rem)

    .hesderBottom
      overflow hidden
      height (60/rem)
      display flex
      .list
        height 100%
        background #fff
        padding 0 (30/rem)
        display flex
        flex-flow row nowrap
        flex-shrink 0
        justify-content space-around
        align-items center
        .item
          margin-left (48/rem)
          flex-shrink 0
          position relative
          display flex
          flex-flow row nowrap
          align-items center
          height 100%
          text-align center
          &:first-of-type {
            margin-left: 0;
          }
          .text
            font-size (28/rem)
            padding 0 (16/rem)
            color #333
            &.active
              color rgb(180, 40, 45)
              &::after
                content ''
                width 100%
                height (4/rem)
                position absolute
                left 0
                bottom 0
                background rgb(180, 40, 45)

  .msiteContent
    padding (148/rem) 0 (98/rem) 0
    .slide_service
      margin-bottom (20/rem)
      background #fff
      .service
        background #fff
        .list
          height (72/rem)
          display flex
          flex-flow row nowrap
          align-items center
          padding 0 (30/rem)
          .item
            font-size 0
            flex 1
            a
              font-size (24/rem)
              .servicePolicy
                display inline-block
                width (32/rem)
                height (32/rem)
                background-image url("./images/service/service.png")
                background-repeat: no-repeat;
                background-size: 100% 100%;
                vertical-align middle
              .serviceName
                font-size: (24/rem)
                color: #333;
                margin-left: (8/rem)
                line-height: (32/rem)
                display: inline-block;
                vertical-align: middle;
    .sale
      width (750/rem)
      height (300/rem)
      margin-bottom (20/rem)
      background papayawhip
      .saleClick
        display block
        width 100%
        height 100%
        background-image url("./images/sale/01.jpg")
        background-repeat no-repeat
        background-position center
    .goodGrid
      margin-bottom (20/rem)
      background #fff
      .goodGrid-wrap
        background #f4f4f4
        .goodGrid-title
          line-height (120/rem)
          text-align center
          font-size (28/rem)
          color #333
          background-color #fff

        .goodGridContent
          background #fff
          position relative
          .goodGridList
            clearFix()
            position relative
            .goodGridItem
              float left
              width 50%
              overflow hidden
              position relative
              box-sizing border-box
              &:nth-child(2n+1)
                padding 0 (10/rem) (33/rem) (20/rem)
              &:nth-child(2n)
                padding 0 (20/rem) (33/rem) (10/rem)
              .goodGridItemA
                width 100%
                .goodGridItemA-hd
                  background #f4f4f4
                  border-radius (4/rem)
                  position relative
                  .goodGridImg
                    position relative
                    padding-bottom 120%
                    img
                      position absolute
                      width 100%
                      height (345/rem)
                      border-radius (4/rem) (4/rem) 0 0
                      background-color #f4f4f4
                  .goodGridDes
                    position absolute
                    bottom 0
                    width 100%
                    background #F1ECE2
                    border-radius 0 0 (4/rem) (4/rem)
                    font-size (24/rem)
                    color #9F8A60
                    letter-spacing 0
                    line-height (28/rem)
                    padding (20/rem) (10/rem)
                    box-sizing border-box
                .goodGridItemA-name
                  margin-top (10/rem)
                  padding 0 (10/rem)
                  line-height (48/rem)
                  text-align left
                  font-size (28/rem)
                  color #333
                .goodGridItemA-price
                  line-height 1
                  font-size (32/rem)
                  text-align left
                  color #b4282d
                  padding 0 (10/rem)
            .goodGridItem-more
              .moreContent
                height (414/rem)
                font-size (32/rem)
                overflow hidden
                .moreContentA
                  border-radius (4/rem)
                  background-color #f4f4f4
                  padding-top (128/rem)
                  padding-bottom (129/rem)
                  width: 100%
                  display flex
                  flex-direction column
                  align-items center
                  justify-content center
                  p
                    padding-bottom (60/rem)
                  i
                    display inline-block
                    vertical-align middle
                    background-image url("./images/supply/supplyMore.png")
                    background-repeat no-repeat
                    background-size 100% 100%
                    width (67/rem)
                    height (67/rem)
    .msiteFooter
      border-top 1px solid rgba(0,0,0,.15)
      background-color #414141
      .footerContent
        margin 0 auto
        width 10rem
        text-align center
        box-sizing border-box
        padding (54/rem) (20/rem) (28/rem) (20/rem)
        .button
          font-size 0
          .goToBtns
            display inline-block
            border-radius (4/rem)
            text-align center
            overflow hidden
            border 1px solid #999
            height (60/rem)
            line-height (60/rem)
          .downloadBtn
            margin-right (50/rem)
            width (170/rem)
            font-size (24/rem)
            color #fff
          .toPcBtn
            width (170/rem)
            font-size (24/rem)
            color #fff
        .copyright
          margin-top (36/rem)
          font-size (24/rem)
          line-height (32/rem)
          color #999
  .newUserEntrance
    position fixed
    right 0
    bottom (210/rem)
    display block
    z-index 10
    i
      display inline-block
      width (112/rem)
      height (80/rem)
      background-image url("./images/newUser/newUser.png")
      background-size 100% 100%
  .goToTop
    position fixed
    right (23/rem)
    bottom (115/rem)
    display inline-block
    width (82/rem)
    height (82/rem)
    background-image url("./images/goToTop/goToTop.png")
</style>
