<template>
  <div class="gCRecommend">
    <div class="gCRContent">
      <div class="gCRCHeader">为你推荐</div>
      <div class="gCRCContent">
        <div v-if="recommendInfo.recommendOne" class="gCRCContentLeft" :style="{backgroundImage: `url(${recommendInfo.recommendOne.picUrl})`}">
          <div class="gCRCContentLeftTitle">
            <div class="gCRCContentLeftText">
              {{recommendInfo.recommendOne.nickname}}
            </div>
          </div>
        </div>
        <div class="gCRCContentRight">
          <div class="gCRCContentRightTop">
            <div class="gCRCCRTTitle" v-if="recommendInfo.recommendOne">
              {{recommendInfo.recommendOne.title}}
            </div>
            <div class="gCRCCRTPrice">
              <span v-if="recommendInfo.recommendOne">{{recommendInfo.recommendOne.priceInfo}}元起</span>
            </div>
          </div>
          <div class="gCRCContentRightBottom">
            <div class="gCRCCRBTitle ellipsis" v-if="recommendInfo.recommendOne">
              {{recommendInfo.recommendOne.subTitle}}
            </div>
          </div>
        </div>
      </div>
      <div class="gCRCList1" v-for="(rec, index) in recommendInfo.recommendArray" :key="index">
        <div class="gCRCList1Left">
          <div class="gCRCList1Left1">
            <img class="gCRCLAvatar" :src="rec.avatar" alt="avatar">
            <div class="nickName">{{rec.nickname}}</div>
          </div>
          <div class="gCRCList1Left2">
            <div class="gCRCList1LeftTitle ellipsis">{{rec.title}}</div>
          </div>
          <div class="gCRCList1Left3">
            <div class="Left3Con ellipsis">
              {{rec.subTitle}}
            </div>
          </div>
        </div>
        <div class="gCRCList1Right">
          <div class="gCRCList1RightImgCon" :style="{backgroundImage: `url(${rec.picUrl})`}">
            <div class="gCRCList1RightTitle">
              {{rec.typeName}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['recommendInfo'])
    },
    mounted () {
      this.$store.dispatch('getGarticle')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gCRecommend
    box-sizing border-box
    padding 0 (30/$rem) (40/$rem)
    margin-bottom (20/$rem)
    background #fff
    .gCRContent
      .gCRCHeader
        font-size (32/$rem)
        height (120/$rem)
        text-align center
        line-height (120/$rem)
      .gCRCContent
        margin-bottom (30/$rem)
        color #333
        border 1px solid #d9d9d9
        border-radius (8/$rem)
        .gCRCContentLeft
          height (386/$rem)
          background-image url("./images/recommend/01.jpg")
          background-size cover
          position relative
          .gCRCContentLeftTitle
            position absolute
            top (20/$rem)
            left (20/$rem)
            .gCRCContentLeftText
              font-size (24/$rem)
              background rgba(255,255,255,.9)
              border-radius (20/$rem)
              border 1px solid #d9d9d9
              padding 0 (16/$rem)
        .gCRCContentRight
          padding (24/$rem) (20/$rem) (67/$rem) (20/$rem)
          .gCRCContentRightTop
            height (43/$rem)
            font-size (36/$rem)
            margin-bottom (19/$rem)
            line-height (28/$rem)
            display flex
            flex-flow row nowrap
            align-items center
            justify-content space-between

          .gCRCContentRightBottom
            .gCRCCRBTitle
              font-size (28/$rem)
              color #7f7f7f
              line-height 1.2
      .gCRCList1
        border 1px solid #d9d9d9
        color #333
        margin-bottom (30/$rem)
        display flex
        flex-flow row nowrap
        &:last-child
          margin-bottom 0
        .gCRCList1Left
          padding 0 (30/$rem) 0 (20/$rem)
          display flex
          flex-flow column
          justify-content center
          flex 1
          width (408/$rem)
          overflow hidden
          .gCRCList1Left1
            display: flex
            flex-flow row nowrap
            align-items center
            margin-bottom (25/$rem)
            .gCRCLAvatar
              display block
              width (46/$rem)
              height (46/$rem)
              margin-right (8/$rem)
              border-radius 50%
            .nickName
              font-size (20/$rem)
              color #333
          .gCRCList1Left2
            margin-bottom (14/$rem)
            .gCRCList1LeftTitle
              margin-right (30/$rem)
              font-size (32/$rem)
          .gCRCList1Left3
            .Left3Con
              width (358/$rem)
              font-size (24/$rem)
              color #7f7f7f
        .gCRCList1Right
          width (280/$rem)
          height (272/$rem)
          .gCRCList1RightImgCon
            width 100%
            height 100%
            background-image url("./images/recommend/minImg.jpg")
            background-size cover
            overflow hidden
            position relative
            .gCRCList1RightTitle
              position absolute
              font-size (24/$rem)
              background rgba(255,255,255,.9)
              padding 0 (16/$rem)
              border-radius (20/$rem)
              top (10/$rem)
              left (10/$rem)
</style>
