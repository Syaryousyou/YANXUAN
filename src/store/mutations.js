import {RECEIVE_BANNERINFO,
  RECEIVE_SERVICEINFO,
  RECEIVE_BRANDSUPPLYINFO,
  RECEIVE_NEWITEMS,
  RECEIVE_HOTITEMS,
  RECEIVE_FLASHINFO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_GBANNERINFO,
  RECEIVE_ARTICLEINFO,
  RECEIVE_RECOMMENDINFO,
  RECEIVE_TENFIFTEENINFO,
  RECEIVE_ZHENINFO,
  RECEIVE_LOOKINFO,
  RECEIVE_FINDMOREINFO,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_MCLASSIFY
} from './mutation_types'
export default {
  [RECEIVE_BANNERINFO] (state, {bannerInfo}) {
    state.bannerInfo = bannerInfo
  },
  [RECEIVE_SERVICEINFO] (state, {serviceInfo}) {
    state.serviceInfo = serviceInfo
  },
  [RECEIVE_BRANDSUPPLYINFO] (state, {brandsupplyinfo}) {
    state.brandsupplyinfo = brandsupplyinfo
  },
  [RECEIVE_NEWITEMS] (state, {newItems}) {
    state.newItems = newItems
  },
  [RECEIVE_HOTITEMS] (state, {hotItems}) {
    state.hotItems = hotItems
  },
  [RECEIVE_FLASHINFO] (state, {flashInfo}) {
    state.flashInfo = flashInfo
  },
  [RECEIVE_TOPICLIST] (state, {topicList}) {
    state.topicList = topicList
  },
  [RECEIVE_CATELIST] (state, {cateList}) {
    state.cateList = cateList
  },
  // 识物页相关
  [RECEIVE_GBANNERINFO] (state, {gbannerInfo}) {
    state.gbannerInfo = gbannerInfo
  },
  [RECEIVE_ARTICLEINFO] (state, {articleInfo}) {
    state.articleInfo = articleInfo
  },
  [RECEIVE_RECOMMENDINFO] (state, {recommendInfo}) {
    state.recommendInfo = recommendInfo
  },
  [RECEIVE_TENFIFTEENINFO] (state, {tenfifteenInfo}) {
    state.tenfifteenInfo = tenfifteenInfo
  },
  [RECEIVE_ZHENINFO] (state, {zhenInfo}) {
    state.zhenInfo = zhenInfo
  },
  [RECEIVE_LOOKINFO] (state, {lookInfo}) {
    state.lookInfo = lookInfo
  },
  [RECEIVE_FINDMOREINFO] (state, {findMoreInfo}) {
    state.findMoreInfo = findMoreInfo
  },
  [RECEIVE_CLASSIFYLIST] (state, {classifyList}) {
    state.classifyList = classifyList
  },
  [RECEIVE_MCLASSIFY] (state, {msiteClassify}) {
    state.msiteClassify = msiteClassify
  }
}
