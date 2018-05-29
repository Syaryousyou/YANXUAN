/*
与后台交互模块
 */
import ajax from './ajax'
/*
 * 获取轮播图信息
 */
export const reqMbanner = () => ajax('/banner')
// 获取轮播图下侧的服务保障信息
export const reqMServiceInfo = () => ajax('/mservice')
// 获取品牌直供列表
export const reqMBrandSupplyInfo = () => ajax('/mbrands')
// 获取新品首发列表
export const reqNewItems = () => ajax('/newgoods')
// 获取人气商品列表
export const reqHotItems = () => ajax('/hotgoods')
// 获取限时购信息
export const reqFlashSale = () => ajax('/flash')
// 获取专题精选信息
export const reqTopicList = () => ajax('/topic')
// 获取好物信息
export const reqCateList = () => ajax('/catelist')
