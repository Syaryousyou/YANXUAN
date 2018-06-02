<template>
  <div>
    <div class="gCLookMoreContent" v-for="(item, index) in findMoreInfo" :key="index">
      <div class="gCLookMoreContentWrap">
        <div class="gCLookMoreContentItem">
          <div v-if="!item.picList.length" class="LookMoreImg" :style="{backgroundImage: `url(${item.itemPicUrl})`}"></div>
          <div v-else class="LookMoreImgThree" >
            <div class="LookLeft" :style="{backgroundImage: `url(${item.picList[0]})`}"></div>
            <div class="LookRight">
              <div class="LookTop" :style="{backgroundImage: `url(${item.picList[1]})`}"></div>
              <div class="LookBottom" :style="{backgroundImage: `url(${item.picList[2]})`}"></div>
            </div>
          </div>
          <div class="LookMoreDes ellipsis">
            {{item.subtitle}}
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
      ...mapState(['findMoreInfo']),
    },
    mounted () {
      this.$store.dispatch('getFindMoreInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gCLookMoreContent
    .gCLookMoreContentItem
      padding (24/$rem)
      margin-bottom (30/$rem)
      background #fff
      .LookMoreImg
        height (360/$rem)
        width (642/$rem)
        background-size cover
      .LookMoreImgThree
        height (360/$rem)
        width (642/$rem)
        & >.LookLeft
          width (460/$rem)
          height (360/$rem)
          box-sizing border-box
          margin-right (4/$rem)
          background-size cover
          float left
        & >.LookRight
          box-sizing border-box
          width (178/$rem)
          float right
          & > .LookTop
            height (178/$rem)
            box-sizing border-box
            margin-bottom (4/$rem)
            background-size cover
          & >.LookBottom
            height (178/$rem)
            box-sizing border-box
            background-size cover
      .LookMoreDes
        padding (29/$rem) 0 (28/$rem) 0
        font-size (28/$rem)
        line-height 1.2
</style>
