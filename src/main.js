// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNativeSock from 'vue-native-websocket'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*theme*/
import '@/assets/css/global.css'
import Vue2TouchEvents from 'vue2-touch-events'
import VueClipboard from 'vue-clipboard2'

Vue.use(BootstrapVue)
Vue.use(Vue2TouchEvents)
Vue.use(VueClipboard)
Vue.use(require('vue-moment'))
Vue.use(VueNativeSock, 'ws://46.21.248.176:1555', {
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 3000,
  format: 'json'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
