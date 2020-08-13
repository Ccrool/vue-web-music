import Meta from 'vue-meta'
import * as utils from "./index"

export default {
  install(Vue) {
    // 基础组件批量自动导入

    // 挂载utils方法
    Vue.prototype.$utils = utils

    // 挂载meta
    Vue.use(Meta)
  }
}