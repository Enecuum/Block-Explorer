import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Token from '@/components/Token'
import Mining from '@/components/Mining'
import Partnership from '@/components/Partnership'
import AllInfo from '@/components/AllInfo'

import Search from '@/components/layout/search/searchRequest'
import Block from '@/components/layout/search/block'
import Transaction from '@/components/layout/search/transaction'
import Wallet from '@/components/layout/search/wallet'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/token/:search?', name: 'Token', component: Token },
    { path: '/mining', name: 'Mining', component: Mining },
    { path: '/partnership', name: 'Partnership', component: Partnership },
    { path: '/allinfo', name: 'All Info', component: AllInfo },

    /* TODO: детальное отображение
    { path: '/transactions', name: 'Transactions', component: Transactions },
    { path: '/transaction/:id', name: 'Transaction Info', component: Index },
    { path: '/blocks', name: 'Blocks', component: Blocks },
    { path: '/nodes', name: 'Nodes', component: Nodes },
    { path: '/node/:id', name: 'Node Info', component: NodeInfo },
    { path: '/token/:id', name: 'Token', component: Token },
    */

    { path: '/transaction/:id', name: 'Transaction', component: Transaction },
    { path: '/block/:id', name: 'Block', component: Block },
    { path: '/wallet/:id', name: 'Wallet', component: Wallet },
  ]
})
