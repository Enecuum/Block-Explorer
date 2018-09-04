import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Explorer from '@/components/Explorer'
// import Mining from '@/components/Mining'
// import About from '@/components/About'
import Search from '@/components/layout/searchError'
// import Pending from '@/components/Pending'
import SendTransaction from '@/components/sendTransaction'

//Explorer
import Block from '@/components/Explorer/Block'
import microBlock from '@/components/Explorer/microBlock'
import Transaction from '@/components/Explorer/Transaction'
import Wallet from '@/components/Explorer/Wallet'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/explorer', name: 'Explorer', component: Explorer},
    {path: '/sendTransaction', name: 'SendTransaction', component: SendTransaction},
    {path: '/explorer/:id', name: 'ExplorerPage', component: Explorer},
    {path: '/explorer/search/:id', name: 'Search', component: Search},
    {path: '/explorer/block/:id', name: 'Block', component: Block},
    {path: '/explorer/microblock/:id', name: 'microBlock', component: microBlock},
    {path: '/explorer/transaction/:id', name: 'Transaction', component: Transaction},
    {path: '/explorer/wallet/:id', name: 'Wallet', component: Wallet},
    // {path: '/mining', name: 'Mining', component: Mining },
    // {path: '/about', name: 'About', component: About},
    // {path: '/pending', name: 'Pending', component: Pending}
  ]
})
