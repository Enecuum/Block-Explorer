// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNativeSock from 'vue-native-websocket'
import StoreWS from './store/WS'
Vue.use(VueNativeSock,
  //'ws://88.99.87.200:1555',
  'ws://demos.kaazing.com/echo',
  { store: StoreWS, format: 'json'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
