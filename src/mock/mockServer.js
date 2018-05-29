import Mock from 'mockjs'
import MfocusList from './Msite/MfocusList'
import policyDescList from './Msite/policyDescList'
import brandSupply from './Msite/brandSupply'
import newItemList from './Msite/newItemList'
import popularItemList from './Msite/popularItemList'
import flashSale from './Msite/flashSale'
import topicList from './Msite/topicList'
import cataList from './Msite/cataList'
// 指定监听的url和对应的json数据模板
Mock.mock('/banner', {
  code: 0,
  data: MfocusList
})
Mock.mock('/mservice', {
  code: 0,
  data: policyDescList
})
Mock.mock('/mbrands', {
  code: 0,
  data: brandSupply
})
Mock.mock('/newgoods', {
  code: 0,
  data: newItemList
})
Mock.mock('/hotgoods', {
  code: 0,
  data: popularItemList
})
Mock.mock('/flash', {
  code: 0,
  data: flashSale
})
Mock.mock('/topic', {
  code: 0,
  data: topicList
})
Mock.mock('/catelist', {
  code: 0,
  data: cataList
})
