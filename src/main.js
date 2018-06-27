// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNativeSock from 'vue-native-websocket'
import StoreWS from './store/WS'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/global.css'

Vue.use(BootstrapVue);

                    // 'ws://88.99.87.200:1555'
Vue.use(VueNativeSock, 'ws://demos.kaazing.com/echo', {
  store: StoreWS,
  format: 'json',
  ids: 1,
  sendRpc (method, params) {
    return this.WebSocket.sendObj({
      jsonrpc: "2.0",
      method: method,
      params: params,
      id: ++this.opts.ids
    })
  },
  passToStoreHandler (eventName, event) {
    console.log('[WS]:', eventName, event)
    if(eventName === 'SOCKET_onopen') {
      setInterval(() => {
        this.opts.sendRpc.call(this, "enq_getAllTransactions", {
          address:"5YXZXhM9MMafhS5fdzanWbimKEpAnmrqabD5BcMm8TxS"
        })
      }, 5000)
    }
    // rpc
    //this.emit(eventName, event)

    //if (!eventName.startsWith('SOCKET_')) { return }
    /*let method = 'commit'
    let target = eventName.toUpperCase()
    let msg = event
    if (this.format === 'json' && event.data) {
      msg = JSON.parse(event.data)
      if (msg.mutation) {
        target = [msg.namespace || '', msg.mutation].filter((e) => !!e).join('/')
      } else if (msg.action) {
        method = 'dispatch'
        target = [msg.namespace || '', msg.action].filter((e) => !!e).join('/')
      }
    }
    this.store[method](target, msg)
    */
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
