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
                      <p>更多居家好物</p>
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

</style>
