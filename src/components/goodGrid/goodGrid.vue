<template>
  <div>
    <div class="goodGrid" v-for="(grid, index) in cateList" :key="index">
      <div class="goodGrid-wrap">
        <h3 class="goodGrid-title">{{grid.name}}好物</h3>
        <div class="goodGridContent">
          <ul class="goodGridList">
            <li class="goodGridItem" v-for="(item, index) in grid.itemList" :key="index">
              <a class="goodGridItemA" href="jacascript:;">
                <div class="goodGridItemA-hd">
                  <div class="goodGridImg">
                    <img :src="item.listPicUrl" alt="01">
                  </div>
                  <div class="goodGridDes ellipsis">
                    {{item.simpleDesc}}
                  </div>
                </div>
                <div class="goodGridItem-active">
                  <p v-show="item.promTag" class="goodGridItem-activeName">
                    {{item.promTag}}
                  </p>
                </div>
                <div class="goodGridItemA-name ellipsis">
                  <span>{{item.name}}</span>
                </div>
                <div class="goodGridItemA-price">
                  <span>￥{{item.retailPrice}}</span>
                </div>
              </a>
            </li>
            <li class="goodGridItem goodGridItem-more">
              <a class="goodGridItemA" href="jacascript:;">
                <div class="goodGridItemA-hd">
                  <div class="moreContent">
                    <a class="moreContentA" href="javascript:;">
                      <p>更多{{grid.name}}好物</p>
                      <i></i>
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['cateList'])
    },
    mounted () {
      this.$store.dispatch('getCateList')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
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
              .goodGridItem-active
                width 100%
                padding-left (10/rem)
                margin (20/rem) 0 0 (4/rem)
                overflow hidden
                height (35/rem)
                box-sizing border-box
                .goodGridItem-activeName
                  width (95/rem)
                  margin-bottom 1px
                  height (30/rem)
                  box-sizing border-box
                  padding (5/rem) (16/rem)
                  line-height (19/rem)
                  text-align center
                  color #fff
                  font-size (20/rem)
                  border-radius (2/rem)
                  display inline-block
                  vertical-align middle
                  background-color #f48f18
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
</style>
