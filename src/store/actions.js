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
import {reqMbanner,
  reqMServiceInfo,
  reqMBrandSupplyInfo,
  reqNewItems,
  reqHotItems,
  reqFlashSale,
  reqTopicList,
  reqCateList,
  reqGbanner,
  reqGarticle,
  reqRecommend,
  reqTenfifteen,
  reqZhen,
  reqYxLook,
  reqFindMore,
  reqClassifyList,
  reqMSclassify
} from '../api'
export default {
  async getBannerInfo ({commit}) {
    const result = await reqMbanner()
    if (result.code === 0) {
      const bannerInfo = result.data
      commit(RECEIVE_BANNERINFO, {bannerInfo})
    }
  },
  async getMServiceInfo ({commit}) {
    const result = await reqMServiceInfo()
    if (result.code === 0) {
      const serviceInfo = result.data
      commit(RECEIVE_SERVICEINFO, {serviceInfo})
    }
  },
  async getBrandsupplyinfo ({commit}) {
    const result = await reqMBrandSupplyInfo()
    if (result.code === 0) {
      const brandsupplyinfo = result.data
      commit(RECEIVE_BRANDSUPPLYINFO, {brandsupplyinfo})
    }
  },
  async getNewItems ({commit}) {
    const result = await reqNewItems()
    if (result.code === 0) {
      const newItems = result.data
      commit(RECEIVE_NEWITEMS, {newItems})
    }
  },
  async getHotItems ({commit}) {
    const result = await reqHotItems()
    if (result.code === 0) {
      const hotItems = result.data
      commit(RECEIVE_HOTITEMS, {hotItems})
    }
  },
  async getFlashInfo ({commit}) {
    const result = await reqFlashSale()
    if (result.code === 0) {
      const flashInfo = result.data
      commit(RECEIVE_FLASHINFO, {flashInfo})
    }
  },
  async getTopicList ({commit}) {
    const result = await reqTopicList()
    if (result.code === 0) {
      const topicList = result.data
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },
  async getCateList ({commit}) {
    const result = await reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      commit(RECEIVE_CATELIST, {cateList})
    }
  },
  async getMClassify ({commit}) {
    const result = await reqMSclassify()
    if (result.code === 0) {
      const msiteClassify = result.data
      commit(RECEIVE_MCLASSIFY, {msiteClassify})
    }
  },
  // 识物页相关信息
  // 轮播图信息
  async getGbanner ({commit}) {
    const result = await reqGbanner()
    if (result.code === 0) {
      const gbannerInfo = result.data
      commit(RECEIVE_GBANNERINFO, {gbannerInfo})
    }
  },
  async getGarticle ({commit}) {
    const result = await reqGarticle()
    if (result.code === 0) {
      const articleInfo = result.data
      commit(RECEIVE_ARTICLEINFO, {articleInfo})
    }
  },
  async getGrecommend ({commit}) {
    const result = await reqRecommend()
    if (result.code === 0) {
      const recommendInfo = result.data
      commit(RECEIVE_RECOMMENDINFO, {recommendInfo})
    }
  },
  async getGtenfifteen ({commit}) {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      const tenfifteenInfo = result.data
      commit(RECEIVE_TENFIFTEENINFO, {tenfifteenInfo})
    }
  },
  async getZhenInfo ({commit}) {
    const result = await reqZhen()
    if (result.code === 0) {
      const zhenInfo = result.data
      commit(RECEIVE_ZHENINFO, {zhenInfo})
    }
  },
  async getLookInfo ({commit}) {
    const result = await reqYxLook()
    if (result.code === 0) {
      const lookInfo = result.data
      commit(RECEIVE_LOOKINFO, {lookInfo})
    }
  },
  async getFindMoreInfo ({commit}) {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMoreInfo = result.data
      commit(RECEIVE_FINDMOREINFO, {findMoreInfo})
    }
  },
  // 分类页相关信息
  async getClassifyList ({commit}, callback) {
    const result = await reqClassifyList()
    if (result.code === 0) {
      const classifyList = result.data
      commit(RECEIVE_CLASSIFYLIST, {classifyList})
      callback && callback()
    }
  }
}
