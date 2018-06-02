<template>
  <div class="brandSupply">
    <div class="header">
      <a href="javascript:;">
        <span>品牌制造商直供</span>
        <i></i>
      </a>
    </div>
    <div class="content">
      <ul class="contentList">
        <li v-if="brand" class="contentItem" v-for="(brand, index) in brandsupplyArr" :key="index">
          <a href="javascript:;">
            <div class="brand">
              <h4  class="title ellipsis">{{brand.name}}</h4>
              <div class="price">
                <span>{{brand.floorPrice}}元起</span>
              </div>
            </div>
            <img class="brandImg" :src="brand.picUrl" alt="02">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['brandsupplyinfo']),
      brandsupplyArr () {
        const {brandsupplyinfo} = this
        let minArr = []
        for (let i = 0; i < 4; i++) {
          minArr.push(brandsupplyinfo[i])
        }
        return minArr
      }
    },
    mounted () {
      this.$store.dispatch('getBrandsupplyinfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  rem=750/10rem
  .brandSupply
    margin-bottom (20/rem)
    background #fff
    .header
      height (110/rem)
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      a
        display flex
        flex-flow row nowrap
        align-items center
        span
          font-size (32/rem)
          color: #333
          vertical-align middle
        i
          background-image url("./supply/supplyMore.png")
          background-repeat no-repeat
          background-size 100% 100%
          display inline-block
          width (30/rem)
          height (30/rem)
          margin-left (10/rem)
          vertical-align middle
    .content
      .contentList
        height (468/rem)
        margin 0 (16/rem)
        .contentItem
          float left
          width (355/rem)
          height (226/rem)
          margin-bottom (8/rem)
          background #f4f4f4
          position relative
          &:nth-child(1)
            margin 0 (8/rem) 0 0
          &:nth-child(3)
            margin 0 (8/rem) 0 0
          & > a
            display inline-block
            width 100%
            height 100%
            .brand
              position absolute
              left 0
              top 0
              padding (20/rem) 0 0 (20/rem)
              font-size (24/rem)
              z-index 4
              .title
                color: #333;
                font-size: (28/rem)
                line-height: (32/rem)
                margin-bottom: (6/rem)
            .brandImg
              width 100%
              height 100%
              opacity 1
</style>
