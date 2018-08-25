// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Client } from 'rpc-websockets/'

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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    ws: new Client(
      process.env.API_URL,
      {
        max_reconnects: 0
      })
  },
  router,
  components: { App },
  template: '<App/>'
})
