import Vue from 'vue'
// import moment from 'moment'
// 通过打包可视化发现moment太大，使用轻量级的日期库date-fns
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('date-format', function (value, formatStr = 'HH:mm') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})
