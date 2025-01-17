// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import { Client } from 'rpc-websockets/'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*theme*/
import '@/assets/css/global.css'
import Vue2TouchEvents from 'vue2-touch-events'
import VueClipboard from 'vue-clipboard2'

import messages from '../static/locale/index'

Vue.use(BootstrapVue)
Vue.use(Vue2TouchEvents)
Vue.use(VueClipboard)
Vue.use(require('vue-moment'))
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    ws: false,
    bootnode: new WebSocket(process.env.API_URL)
  },
  methods: {
    apiListeners()
    {
      this.bootnode.onopen = () =>
      {
        this.bootnode.send(JSON.stringify({type:"getApiServers"}))
      }

      this.bootnode.onmessage = (event) =>
      {
        let response = JSON.parse(event.data)
        if (response.msg.length === 0)
        {
          console.log("there are not available API servers")
          setTimeout(() =>
          {
            this.bootnode = new WebSocket(process.env.API_URL)
            this.apiListeners()
          },5000)
        }
        else
        {
          this.bootnode.close()
          response.msg.forEach( ws =>
          {
            if (this.ws && this.ws.ready) return
            this.ws = new Client( (process.env.API_URL ? process.env.API_URL.substr(0, process.env.API_URL.indexOf(":")) : "ws") +"://" + ws.ip + ":" + ws.port, {reconnect: false} )
          })

          this.ws.on('open', function()
          {
            this.subscribe('dashboard.stats')
            this.subscribe('dashboard.addNode')
            this.subscribe('dashboard.removeNode')
            this.subscribe('dashboard.disconnect')
          })

          this.ws.on("error", (error) => {
            setTimeout(() =>
            {
              this.bootnode = new WebSocket(process.env.API_URL)
              this.apiListeners()
            },5000)
          })

          this.ws.on('close', () =>
          {
            this.bootnode = new WebSocket(process.env.API_URL)
            this.apiListeners()
          })
        }
      }
    }
  },
  mounted() {
    this.apiListeners()
  },

  router,
  i18n,
  components: { App },
  template: '<App/>'
})
