import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Token from '@/components/Token'
import Mining from '@/components/Mining'
import Partnership from '@/components/Partnership'
import AllInfo from '@/components/AllInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/token', name: 'Token', component: Token },
    { path: '/mining', name: 'Mining', component: Mining },
    { path: '/partnership', name: 'Partnership', component: Partnership },
    { path: '/allinfo', name: 'All Info', component: AllInfo },

    /* TODO: детальное отображение
    { path: '/token/:id', name: 'TokenInfo', component: Index },
    { path: '/transaction/:id', name: 'TransactionInfo', component: Index },
    { path: '/block/:id', name: 'BlockInfo', component: Index },
    { path: '/wallet/:id', name: 'WalletInfo', component: Index },
    */
  ]
})
