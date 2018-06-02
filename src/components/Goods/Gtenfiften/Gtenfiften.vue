<template>
  <div class="gTenFifteen">
    <div class="gTenFifteenInner">
      <div class="gTenFifteenHD">
        十点一刻
      </div>
      <div class="gTenFifteenContainer swiper-container">
        <ul class="gTenFifteenWrapper swiper-wrapper">
          <li class="gTenFifteenSlide swiper-slide" v-for="(item, index) in tenfifteenInfo" :key="index">
            <div class="gTenFifteenItem">
              <div class="gTenFifteenItemLine1">- 今日话题 -</div>
              <div class="gTenFifteenItemTitle">{{item.title}}</div>
              <div class="gTenFifteenItemDes">{{item.desc}}</div>
              <div class="gTenFifteenItemJoin">
                <div class="joinInner">
                  <div class="joinInnerLeft">
                    <!--<div class="LAvatar" v-for="(ava, index) in item.participantAvatar"-->
                         <!--:key='index' :style="{backgroundImage: `url(${ava ? ava : '/static/images/avatar.png'})`}"></div>-->
                    <div class="LAvatar" v-for="(ava, index) in item.participantAvatar"
                         :key='index' :style="{backgroundImage: `url(${ava ? ava : avatar})`}"></div>
                    <div class="AEl">
                      <div class="spot"></div>
                      <div class="spot"></div>
                      <div class="spot"></div>
                    </div>
                  </div>
                  <div class="joinInnerRight">
                    <span>{{item.participantNum}}人参与话题</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="gTenFifteenSlide swiper-slide">
            <div class="gTenFifteenItemMore gTenFifteenItem">
              <div class="MoreText">
                查看全部话题
              </div>
              <i class="Moreicon"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  // 使用图片变量
  import avatar from './images/tenFifteen/avatar.png'
  export default {
    data () {
      return {
        avatar: avatar
      }
    },
    computed: {
      ...mapState(['tenfifteenInfo'])
    },
    mounted () {
      this.$store.dispatch('getGtenfifteen')
    },
    watch: {
      tenfifteenInfo (val) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper ('.gTenFifteenContainer', {
            initialSlide: 0,
            slidesPerView: 'auto'
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .gTenFifteen
    box-sizing border-box
    padding 0 (30/$rem) (40/$rem) (30/$rem)
    margin-bottom (20/$rem)
    background #fff
    .gTenFifteenInner
      .gTenFifteenHD
        height (120/$rem)
        line-height (120/$rem)
        font-size (32/$rem)
        text-align center
      .gTenFifteenContainer
        .gTenFifteenSlide
          box-sizing border-box
          width (580/$rem)
          margin-right (30/$rem)
          .gTenFifteenItem
            box-sizing border-box
            width (580/$rem)
            height (411/$rem)
            padding (38/$rem) (40/$rem) (79/$rem) (40/$rem)
            margin-right (30/$rem)
            background-image url("./images/tenFifteen/bg.png")
            color #333
            .gTenFifteenItemLine1
              margin-bottom (40/$rem)
              color #333
              font-size (24/$rem)
              text-align center
            .gTenFifteenItemTitle
              margin-bottom (14/$rem)
              font-size (36/$rem)
              font-weight 700
              text-align center

            .gTenFifteenItemDes
              font-size (28/$rem)
              text-align center
            .gTenFifteenItemJoin
              position absolute
              bottom (79/$rem)
              width (500/$rem)
              .joinInner
                display flex
                flex-flow row nowrap
                justify-content center
                clearFix()
                .joinInnerLeft
                  float left
                  display flex
                  flex-flow row nowrap
                  margin-right (30/$rem)
                  & > div
                    width (48/$rem)
                    height (48/$rem)
                    border-radius 50%
                  .AEl
                    background #d9d9d9
                    border 2px solid #fff
                    box-sizing border-box
                    display flex
                    flex-flow row nowrap
                    align-items center
                    justify-content center
                    .spot
                      width (6/$rem)
                      height (6/$rem)
                      border-radius 50%
                      margin-right (4/$rem)
                      background #fff
                .joinInnerRight
                  height (48/$rem)
                  line-height (48/$rem)
                  font-size (24/$rem)
                  color #333
                  vertical-align center
                  float left
          .gTenFifteenItemMore
            display flex
            flex-flow row nowrap
            align-items center
            justify-content center
            color #7f7f7f
            font-size (32/$rem)
            line-height (38/$rem)
            margin-right (17/$rem)
            .MoreText
              margin-right (30/$rem)
            .Moreicon
              display inline-block
              width (30/$rem)
              height (30/$rem)
              background-image url("./images/tenFifteen/more.png")
              vertical-align middle
</style>
