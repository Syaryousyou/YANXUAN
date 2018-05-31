<template>
  <div>
    <header class="cHeader">
      <div class="cHeaderInner">
        <i class="search"></i>
        <span class="placeholder">搜索商品, 共9723款好物</span>
      </div>
    </header>
    <div class="cContent">
      <div class="menuWrapper">
        <div class="menuInner">
          <ul class="menus">
            <li class="menu" v-for="(grid, index) in classifyList" :key="index">
              {{grid.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="menuItem">

      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['classifyList'])
    },
    mounted () {
      this.$store.dispatch('getClassifyList')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cHeader
    width 100%
    height (87/$rem)
    background #fff
    padding 0 (30/$rem)
    box-sizing border-box
    display flex
    align-items center
    justify-content center
    position fixed
    top 0
    left 0
    &::after
      display block
      height 1px
      width 100%
      content ''
      position absolute
      bottom 0
      left 0
      background #d9d9d9
    .cHeaderInner
      width 100%
      height (56/$rem)
      background #ededed
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      .search
        display inline-block
        width (28/$rem)
        height (28/$rem)
        background-image url("./images/header/search.png")
        margin-right (10/$rem)
        vertical-align middle
      .placeholder
        color #666
        font-size (28/$rem)
        vertical-align middle
  .cContent
    padding (87/$rem) 0 (98/$rem) 0
    background #fff
    .menuWrapper
      background #fff
      position fixed
      top (87/$rem)
      left 0
      width (162/$rem)
      &::after
        display block
        height 100%
        width 1px
        content ''
        position absolute
        bottom 0
        left (161/$rem)
        background #d9d9d9
      .menus
        .menu
          text-align center
          font-size (28/$rem)
          margin-top (40/$rem)
          width 100%
          height (50/$rem)
          position relative
          &.active
            font-size (36/$rem)
            color #ab2b2b
            &::after
              display inline-block
              width (6/$rem)
              height (50/$rem)
              position absolute
              content ''
              left 0
              background #ab2b2b
    .menuItem
      box-sizing border-box
      padding (30/$rem) (30/$rem) (21/$rem)
      margin-left (162/$rem)
      /*height 3000px*/
      border 5px solid pink
</style>
