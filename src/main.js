import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 追記
import VueAxios from 'vue-axios' // 追記
import cookie from './plugins/cookie'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, cookie) // 追記

new Vue({
  router,
  cookie,
  render: h => h(App)
}).$mount('#app')
