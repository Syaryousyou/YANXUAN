<template>
  <div class="gCLook">
    <div class="gCLTitle">严选Look</div>
    <div class="gCLcontent">
      <img class="gCLcontentImage" :src="lookInfo.picUrl" alt="01">
      <div class="gCLcontentInfo">
        <div class="gCLcontentInfoTop">
          <div class="TopAvatar">
            <img :src="lookInfo.avatar" alt="01">
          </div>
          <div class="gCnickName ellipsis">{{lookInfo.nickname}}</div>
        </div>
        <div class="gCLcontentInfoBottom">
          {{lookInfo.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['lookInfo'])
    },
    mounted () {
      this.$store.dispatch('getLookInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gCLook
    .gCLTitle
      background #fff
      text-align center
      font-size (32/$rem)
      height (120/$rem)
      line-height (120/$rem)
    .gCLcontent
      .gCLcontentImage
        width 100%
        height auto
      .gCLcontentInfo
        box-sizing border-box
        padding (24/$rem) (30/$rem) (46/$rem) (30/$rem)
        background #fff
        .gCLcontentInfoTop
          display flex
          flex-flow row nowrap
          align-items center
          .TopAvatar
            width (46/$rem)
            height (46/$rem)
            border-radius 50%
            margin-right (8/$rem)
            box-sizing border-box
            border 1px solid #d9d9d9
            overflow hidden
            & > img
              display block
              width 100%
              height 100%
          .gCnickName
            color #333
            font-size (24/$rem)
        .gCLcontentInfoBottom
          color #7f7f7f
          font-size (28/$rem)
          line-height (45/$rem)
</style>
