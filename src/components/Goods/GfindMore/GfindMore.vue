<template>
  <div>
    <div class="gCLookMoreContent" v-for="(item, index) in findMoreInfo" :key="index">
      <div class="gCLookMoreContentWrap">
        <div class="gCLookMoreContentItem">
          <div class="LookMoreImg" :style="{backgroundImage: `url(${item.itemPicUrl})`}"></div>
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
      ...mapState(['findMoreInfo'])
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
      .LookMoreDes
        padding (29/$rem) 0 (28/$rem) 0
        font-size (28/$rem)
        line-height 1.2
</style>
