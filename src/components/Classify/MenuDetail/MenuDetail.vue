<template>
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
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      index: Number
    },
    computed: {
      ...mapState(['classifyList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .menuItem
    box-sizing border-box
    padding (30/$rem) (30/$rem) (21/$rem)
    margin-left (162/$rem)
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
