<template>
  <div>
    <header class="cartHd">
      购物车
    </header>
    <div class="cart">
      <div class="cartSupply">
        <ul class="supplyList">
          <li class="supplyItem">
            <i class="supplySpot"></i>
            <span class="text">30天无忧退货</span>
          </li>
          <li class="supplyItem">
            <i class="supplySpot"></i>
            <span class="text">48小时快速退款</span>
          </li>
          <li class="supplyItem">
            <i class="supplySpot"></i>
            <span class="text">满88元免邮费</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartContent">
      <div class="main">
        <div class="cartImage"></div>
        <div class="cartText">
          <div class="login">
            <div class="title">
              去添加点什么吧
            </div>
            <div class="btn" @click="$router.push('/profile')">
              登录
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartHd
    height (87/$rem)
    width 100%
    background #fff
    line-height (87/$rem)
    text-align center
    font-size (34/$rem)
    position fixed
    left 0
    top 0
    &::after
      content ''
      display block
      width 100%
      height 1px
      background #d9d9d9
      position absolute
      left 0
      bottom 1px
  .cart
    margin-top  (87/$rem)
    .cartSupply
      .supplyList
        height (70/$rem)
        display flex
        flex-flow row nowrap
        align-items center
        justify-content space-around
        .supplyItem
          font-size (24/$rem)
          color #666
          .supplySpot
              display inline-block
              width (10/$rem)
              height (10/$rem)
              background-image url("./images/spot.png")
              vertical-align middle
  .cartContent
    position fixed
    width 100%
    top (87/$rem)
    left 0
    bottom 0
    z-index 0
    .main
      position absolute
      left 0
      right 0
      bottom 0
      top (50/$rem)
      margin auto
      height (300/$rem)
      text-align center
      .cartImage
        display inline-block
        vertical-align middle
        width (248/$rem)
        height (248/$rem)
        margin-bottom (8/$rem)
        background-image url("./images/cart.png")
        background-size  (248/$rem) (248/$rem)
        background-position center center
        background-repeat no-repeat
      .cartText
        font-size (28/$rem)
        line-height 1
        color #7f7f7f
        .login
          margin-top (-20/$rem)
          .title
            margin-bottom (50/$rem)
          .btn
            width (480/$rem)
            height (92/$rem)
            box-sizing border-box
            border-radius (3/$rem)
            font-size (30/$rem)
            background #b4282d
            line-height (92/$rem)
            color #fff
            margin 0 auto
</style>
