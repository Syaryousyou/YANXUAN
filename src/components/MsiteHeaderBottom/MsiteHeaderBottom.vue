<template>
  <div class="hesderBottom">
    <div class="list">
      <div class="item" v-for="(item, index) in msiteClassify" :key="index" @click="isShow=index">
        <span class="text" :class="{active: index === isShow}">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        isShow: 0
      }
    },
    computed: {
      ...mapState(['msiteClassify'])
    },
    mounted () {
      this.$store.dispatch('getMClassify')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .hesderBottom
    overflow hidden
    height (60/$rem)
    display flex
    .list
      height 100%
      background #fff
      padding 0 (30/$rem)
      display flex
      flex-flow row nowrap
      flex-shrink 0
      justify-content space-around
      align-items center
      .item
        margin-left (48/$rem)
        flex-shrink 0
        position relative
        display flex
        flex-flow row nowrap
        align-items center
        height 100%
        text-align center
        &:first-of-type {
          margin-left: 0;
        }
        .text
          font-size (28/$rem)
          padding 0 (16/$rem)
          color #333
          &.active
            color rgb(180, 40, 45)
            &::after
              content ''
              width 100%
              height (4/$rem)
              position absolute
              left 0
              bottom 0
              background rgb(180, 40, 45)

</style>
