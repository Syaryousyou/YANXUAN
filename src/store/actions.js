import {RECEIVE_BANNERINFO,
  RECEIVE_SERVICEINFO,
  RECEIVE_BRANDSUPPLYINFO,
  RECEIVE_NEWITEMS,
  RECEIVE_HOTITEMS,
  RECEIVE_FLASHINFO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST
} from './mutation_types'
import {reqMbanner,
  reqMServiceInfo,
  reqMBrandSupplyInfo,
  reqNewItems,
  reqHotItems,
  reqFlashSale,
  reqTopicList,
  reqCateList
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
  }
}
