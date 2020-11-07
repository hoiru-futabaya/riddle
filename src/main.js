/* eslint spaced-comment : 0 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 追記
import VueAxios from 'vue-axios' // 追記
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueAxios, axios) // 追記
Vue.use(VueCookies)
// set default config
Vue.$cookies.config('7d')

// set global cookie
Vue.$cookies.set('theme', 'default')
Vue.$cookies.set('hover-time', '1s')

//if (!Vue.$cookies.isKey('kokomade')) {
//  Vue.$cookies.set('kokomade', -1)
//  alert('Cookie初回セット')
//}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
