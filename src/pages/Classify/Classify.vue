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
            <li class="menu" :class="{active: isShow(index)}"
                v-for="(grid, index) in classifyList"
                :key="index" @click="showDetail(index)">
              {{grid.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="menuItem">
        <div class="hdImg" v-if="classifyList[index]" :style="{backgroundImage: `url(${classifyList[index].bannerUrl})`}"></div>
        <div class="itemContent">
          <div class="itemChd">
            <span class="text" v-if="classifyList[index]">{{classifyList[index].name}}分类</span>
          </div>
          <ul class="itemList" v-if="classifyList[index]">
            <li class="itemListItem"  v-for="(item, i) in classifyList[index].subCateList" :key="i">
              <div class="itemImg">
                <img :src="item.wapBannerUrl" alt="01">
              </div>
              <div class="itemTitle">
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        index: 3
      }
    },
    computed: {
      ...mapState(['classifyList'])
      // detail () {
      //   const {classifyList, index} = this
      //   return classifyList[index].subCateList
      // }
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
      /*border 5px solid pink*/
      .hdImg
        width 100%
        height (192/$rem)
        font-size (28/$rem)
        background #fff
        background-image url("./images/content/hdbg.jpg")
        border-radius (4/$rem)
        background-size cover
        background-repeat no-repeat
      .itemContent
        .itemChd
          height (108/$rem)
          text-align center
          color #333
          line-height (108/$rem)
          font-size (24/$rem)
        .itemList
          .itemListItem
            width (144/$rem)
            display inline-block
            vertical-align: top
            font-size 0
            margin-right (20/$rem)
            &:nth-child(3n)
              margin-right 0
            .itemImg
              overflow hidden
              width (144/$rem)
              height (144/$rem)
              & > img
                width 100%
                height 100%
          .itemTitle
            width (144/$rem)
            height (72/$rem)
            font-size (24/$rem)
            color #333
            line-height (72/$rem)
            text-align center
</style>
