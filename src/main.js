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
    ws: false,
    bootnode: new WebSocket(process.env.API_URL)
  },
  mounted() {
    this.bootnode.onopen = () =>
    {
      this.bootnode.send(JSON.stringify({type:"getApiServers"}))
    }

    this.bootnode.onmessage = (event) =>
    {
      let response = JSON.parse(event.data)
      if (response === "there no available api servers")
      {
        console.log(event.data)
        setTimeout(() => {this.bootnode.send(JSON.stringify({type:"getApiServers"}))},5000)
      }
      else
      {
        response.forEach( ws =>
        {
          this.bootnode.close()
          this.ws = new Client("ws://" + ws)
          if (this.ws.ready) return
        })

        this.ws.on('open', function()
        {
            this.subscribe('dashboard.stats')
            this.subscribe('dashboard.addNode')
            this.subscribe('dashboard.removeNode')
            this.subscribe('dashboard.disconnect')
        })
      }
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
