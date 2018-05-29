<template>
  <div class="flashSale">
    <a href="javascript:;" class="flashA">
      <div class="flashContent">
        <div class="leftItem">
          <div class="title">严选限时购</div>
          <div class="countdown">
            <span class="hours">10</span>
            <span class="colon">:</span>
            <span class="mins">00</span>
            <span class="colon">:</span>
            <span class="secs">00</span>
          </div>
          <div class="next">
              <span>
                <span>下一场 </span>
                <span>11:00</span>
                <span>开始</span>
              </span>
          </div>
        </div>
        <div class="rightItem">
          <div class="flashGood">
            <img :src="flashInfo.primaryPicUrl" alt="flash">
          </div>
          <div class="flashPrice">
            <div class="nowPrice">
              <span class="rmb">￥</span>
              <span>{{flashInfo.activityPrice}}</span>
            </div>
            <div class="originPrice">
              <span class="rmb">￥</span>
              <span>{{flashInfo.originPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['flashInfo'])
    },
    mounted () {
      this.$store.dispatch('getFlashInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
  .flashSale
    .flashA
      .flashContent
        box-sizing border-box
        height (380/rem)
        margin-bottom (20/rem)
        padding (30/rem) (40/rem) (30/rem) (56/rem)
        background #fff
        display flex
        .leftItem
          flex 1
          display flex
          flex-direction column
          padding-top (80/rem)
          .title
            font-size (36/rem)
            line-height (36/rem)
            margin-bottom (24/rem)
            color #333
            letter-spacing (12/rem)
          .countdown
            display inline
            font-size 0
            .hours,.mins,.secs
              display inline-block
              line-height (56/rem)
              text-align center
              width (62/rem)
              height (56/rem)
              font-size (32/rem)
              color #fff
              border-radius (4/rem)
              background #444
            .colon
              color #333
              font-size (30/rem)
              width (20/rem)
              display inline-block
              text-align center
              font-weight 700
          .next
            margin-top (40/rem)
            color #333
            font-size (24/rem)
            line-height (24/rem)
            height (24/rem)
        .rightItem
          background #fff
          width (320/rem)
          height (320/rem)
          position relative
          .flashGood
            width 100%
            img
              width 100%
              height 100%
          .flashPrice
            height (96/rem)
            width (96/rem)
            position absolute
            right (20/rem)
            bottom (36/rem)
            background-color rgba(244,143,24,.95)
            border-radius: 100%;
            color #fff
            text-align center
            display flex
            flex-direction column
            justify-content center
            .nowPrice,.originPrice
              font-size (28/rem)
              line-height (28/rem)
              height (28/rem)
              .rmb
                font-size (24/rem)
                line-height (24/rem)
</style>
