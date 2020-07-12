import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './plugins/element.js'

import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'
Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
