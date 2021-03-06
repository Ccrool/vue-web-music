import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import global from '@/utils/global.js'

Vue.config.productionTip = false

Vue.use(global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
