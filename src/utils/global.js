import Meta from 'vue-meta'
import * as utils from "./index"
import Storage from 'good-storage'
import {
  Switch
} from 'element-ui'

export default {
  install(Vue) {
    // 基础组件批量自动导入
    const requireComponent = require.context(
      "@/base",
      true,
      /[a-z0-9]+\.(jsx?|vue)$/i,
    )
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name
      if (componentName) { // 注册
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    });
    // 挂载utils方法
    Vue.prototype.$utils = Object.assign({}, utils, {
      Storage
    })

    // 挂载meta
    Vue.use(Meta)

    // 注册ele组件
    Vue.use(Switch)
  }
}