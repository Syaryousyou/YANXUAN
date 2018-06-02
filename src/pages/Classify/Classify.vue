<template>
  <div class="ClassifyCon">
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
            <li class="menu" :class="{active: isShow(index)}"
                v-for="(grid, index) in classifyList"
                :key="index" @click="showDetail(index)">
              {{grid.name}}
            </li>
          </ul>
        </div>
      </div>
      <MenuDetail :index="index"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import MenuDetail from '../../components/Classify/MenuDetail/MenuDetail'
  export default {
    data () {
      return {
        index: 3
      }
    },
    computed: {
      ...mapState(['classifyList'])
    },
    methods: {
      showDetail (index) {
        this.index = index
      },
      isShow (index) {
        return index === this.index
      }
    },
    mounted () {
      this.$store.dispatch('getClassifyList', () => {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new BScroll('.menuWrapper', {
            scrollX: true,
            click: true
          })
          })
        })
    },
    components: {
      MenuDetail
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .ClassifyCon
    height 100%
    background #fff
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
    z-index 1
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
    /*box-sizing border-box*/
    padding (87/$rem) 0 (98/$rem) 0
    background #fff
    .menuWrapper
      background #fff
      position fixed
      top (87/$rem)
      left 0
      width (162/$rem)
      height 83%
      z-index 0
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
</style>
