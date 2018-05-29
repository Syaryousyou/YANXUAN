<template>
  <div class="hotItems">
    <header class="hd">
      <a class="more" href="javascript:;">
        <span>人气推荐 · 好物精选</span>
        <div>
          <div class="all">
              <span class="wrap">
                <span>查看全部</span>
                <i></i>
              </span>
          </div>
        </div>
      </a>
    </header>
    <div class="goods">
      <div class="hotInner swiper-container">
        <ul class="list swiper-wrapper">
          <li class="item swiper-slide" v-for="(hitem, index) in hotItems" :key="index">
            <a class="good" href="javascript:;">
              <div class="good_header">
                <div class="wrap">
                  <img :src="hitem.listPicUrl" alt="01">
                </div>
              </div>
              <span></span>
              <div class="goodName">
                <span>{{hitem.name}}</span>
              </div>
              <div class="gooeDesc ellipsis">
                {{hitem.simpleDesc}}
              </div>
              <div class="goodPrice">
                <span>￥{{hitem.retailPrice}}</span>
              </div>
              <span></span>
            </a>
          </li>
          <li class="item swiper-slide lookMore">
            <a class="click"  href="javascript:;">
              <span class="moreText">查看全部</span>
            </a>
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
      ...mapState(['hotItems'])
    },
    mounted () {
      this.$store.dispatch('getHotItems')
    },
    watch: {
      hotItems (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.topicSlide-container', {
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
  .hotItems
    margin-bottom (20/rem)
    background #fff
    .hd
      background-image url("./images/hotItems/bg.png")
      background-size (750/rem) (260/rem)
      height (260/rem)
      margin-bottom (32/rem)
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      font-size (32/rem)
      .more
        display block
        text-align center
        font-size (36/rem)
        color #B4A078
        .all
          margin (16/rem) auto 0
          width (240/rem)
          height (56/rem)
          font-size (28/rem)
          line-height (56/rem)
          background #F4E9CB
          .wrap
            width (128/rem)
            display inline-block
            text-align left
            position relative
            i
              color #B4A078
              position absolute
              top (17/rem)
              background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
              background-size (10/rem) (22/rem)
              display: inline-block;
              height: (22/rem)
              width: (10/rem)
              margin-left (6/rem)
    .goods
      height (480/rem)
      .hotInner
        height (480/rem)
        overflow hidden
        .list
          height (414/rem)
          .item
            padding 0
            margin-left (30/rem)
            width (280/rem)
            overflow hidden
            position relative
            float left
            .good
              display block
              width 100%
              height 100%
              .good_header
                background #f4f4f4
                border-radius (4/rem)
                height (280/rem)
                .wrap
                  position relative
                  padding-bottom 100%
                  margin-bottom (20/rem)
                  img
                    position absolute
                    width 100%
                    height 100%
                    left 0
                    top 0
              .goodName
                margin (10/rem) 0
                padding 0 (10/rem)
                font-size (28/rem)
                line-height (34/rem)
                text-align left
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                color #333
              .gooeDesc
                margin-bottom (14/rem)
                font-size (24/rem)
                color: #7f7f7f;
                line-height (30/rem)
                padding: 0 (10/rem)
              .goodPrice
                padding 0 (10/rem)
                font-size (28/rem)
                text-align left
                color #b4282d
                line-height 1
            &.lookMore
              display block
              border (8/rem) solid #F4F4F4
              width (264/rem)
              height (264/rem)
              margin 0 (30/rem)
              line-height (264/rem)
              text-align center
              .click
                display block
                width 100%
                height 100%
                .moreText
                  font-size (28/rem)
</style>
