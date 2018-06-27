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
    { path: '/transactions', name: 'Transactions', component: Transactions },
    { path: '/transaction/:id', name: 'Transaction Info', component: Index },
    { path: '/blocks', name: 'Blocks', component: Blocks },
    { path: '/block/:id', name: 'Block Info', component: BlockInfo },
    { path: '/nodes', name: 'Nodes', component: Nodes },
    { path: '/node/:id', name: 'Node Info', component: NodeInfo },

    { path: '/token/:id', name: 'Token Info', component: Index },
    { path: '/wallet/:id', name: 'Wallet Info', component: WalletInfo },
    */
  ]
})
