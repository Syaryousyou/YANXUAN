<template>
  <div>
    <header class="Header">
      <div class="HeaderLeft">
        <i class="home" @click="$router.push('/msite')"></i>
      </div>
      <div class="HeaderTitle">
        <i class="logo"></i>
      </div>
      <div class="HeaderRight">
        <i class="search"></i>
        <i class="cart" @click="$router.push('/shopcart')"></i>
      </div>
    </header>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Header
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
    .HeaderLeft
      .home
        display inline-block
        width (48/$rem)
        height (44/$rem)
        background-image url("./images/header/logos.png")
        background-repeat no-repeat
        background-position 0 (-74/$rem)
    .HeaderTitle
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
    .HeaderRight
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
</style>
