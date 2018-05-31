<template>
  <div class="gCRecommend">
    <div class="gCRContent">
      <div class="gCRCHeader">严选甄品</div>
      <div class="gCRCContent">
        <div v-if="zhenInfo.zhenOne" class="gCRCContentLeft" :style="{backgroundImage: `url(${zhenInfo.zhenOne.picUrl})`}">
          <div class="gCRCContentLeftTitle">
            <div class="gCRCContentLeftText" v-if="zhenInfo.zhenOne">
              {{zhenInfo.zhenOne.nickname}}
            </div>
          </div>
        </div>
        <div class="gCRCContentRight">
          <div class="gCRCContentRightTop">
            <div class="gCRCCRTTitle" v-if="zhenInfo.zhenOne">
              {{zhenInfo.zhenOne.title}}
            </div>
            <div class="gCRCCRTPrice">
              <span></span>
            </div>
          </div>
          <div class="gCRCContentRightBottom">
            <div class="gCRCCRBTitle ellipsis">
            </div>
          </div>
        </div>
      </div>
      <div class="gCRCList1" v-for="(zh, index) in zhenInfo.zhenArray" :key="index">
        <div class="gCRCList1Left">
          <div class="gCRCList1Left1">
            <!--<img class="gCRCLAvatar" src="" alt="">-->
            <div class="nickName"></div>
          </div>
          <div class="gCRCList1Left2">
            <div class="gCRCList1LeftTitle ellipsis">{{zh.title}}</div>
          </div>
          <div class="gCRCList1Left3">
            <div class="Left3Con"></div>
          </div>
        </div>
        <div class="gCRCList1Right">
          <div class="gCRCList1RightImgCon" :style="{backgroundImage: `url(${zh.picUrl})`}">
            <div class="gCRCList1RightTitle">
              {{zh.typeName}}
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
      ...mapState(['zhenInfo'])
    },
    mounted () {
      this.$store.dispatch('getZhenInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
