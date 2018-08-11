<template>
  <div id="app" class="h-100">
    <div class="sticky">
      <topHeader></topHeader>
    </div>

    <b-container fluid>
      <b-row class="position-relative overflow-hidden">
        <sidebar class="d-none d-lg-block"></sidebar>

        <sidebarMobile class="d-block d-lg-none" v-touch:swipe.right="expandSidebar"
                       v-touch:swipe.left="closeSidebar"></sidebarMobile>

        <div class="mobile-toggler d-sm-none" v-touch:tap="sidebarToggle">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width="50px" height="50px"
               viewBox="0 0 50 50">
            <g>
              <circle cx="25" cy="25" r="23" stroke="#E6E6E6" stroke-width="2px" fill="#f8f9fa" c/>
              <polyline fill="none" stroke="#666" stroke-width="3" stroke-linecap="round" points="28,13 40,25 28,37"/>
            </g>
          </svg>

        </div>

        <b-col class="content p-0">
          <transition name="disappear" mode="out-in">
            <router-view :key="$route.path"></router-view>
          </transition>
        </b-col>

      </b-row>
    </b-container>

  </div>
</template>

<script>
  import _ from 'lodash'
  import topHeader from "@/components/layout/topHeader"
  import sidebar from "@/components/layout/sidebar"
  import sidebarMobile from "@/components/layout/sidebarMobile"

  export default {
    name: 'App',
    data() {
      return {
        ready: false,
        ids: 0,
        pool: [],
        interval: null
      }
    },
    methods: {
      sidebarToggle(e) {
        e.currentTarget.classList.contains('expand') ? this.closeSidebar() : this.expandSidebar()
      },
      expandSidebar() {
        document.querySelector('.sidebar.mobile').classList.add('expand')
        document.querySelector('.mobile-toggler').classList.add('expand')
      },
      closeSidebar() {
        document.querySelector('.sidebar.mobile').classList.remove('expand')
        document.querySelector('.mobile-toggler').classList.remove('expand')
      },
      closed() {
        this.ready = false
      },
      sendPool() {
        if (this.$socket.readyState !== 1) return
        this.ready = true
        this.$root.$emit('dashboard.flush')
        _.each(this.pool, this.$socket.sendObj)
      },
      sendRpc(method, params) {
        let request = {
          jsonrpc: "2.0",
          method: method,
          id: ++this.ids
        }
        if (params) request.params = params
        return new Promise((resolve, reject) = > {
          this.$once('rpc.' + request.id, (response) = > {
          if(_.has(response, 'error')
      )
        return reject(response.error)
        return resolve(response.result)
      })
        if (this.ready) {
          this.$socket.sendObj(request)
          this.interval = setTimeout(() = > {
            console.log('timeout')
          this.$socket.close()
          // this.$socket.open()
          // this.$disconnect()
          // this.$connect()
        },
          5000
        )
        } else {
          this.pool.push(request)
        }
      })
      },
      parseRpc(response) {
        clearTimeout(this.interval)
        response = JSON.parse(response.data)
        this.pool = _.reject(this.pool, {id: response.id})
        this.$emit('rpc.' + response.id, response)
      },
      dashboard(response) {
        response = JSON.parse(response.data)
        this.$root.$emit('dashboard.' + response.method, response)
      }
    },
    created() {
      //console.log('APP', this.$options.sockets);
      this.$socket.sendRpc = this.sendRpc
      this.$options.sockets.onopen = () =
    >
      this.sendPool()
      this.$options.sockets.onclose = () =
    >
      this.closed()
      // this.$options.sockets.onerror = (e) => this.error(e)
      this.$options.sockets.onmessage = (e) =
    >
      {
        if (e.data.indexOf('jsonrpc') !== -1)
          this.parseRpc(e)
        else
          this.dashboard(e)
      }
    },
    mounted() {
      console.log('mounted app')
      /*this.opts.sendRpc.call(this, "enq_getTransactionsByWallet", {
        address: "H92R1kj4cJiuSdGBRAW5jX4g4ngff4oGQ3bFffJC7xPj",
        count: 10,
        offset: 1
      })*/
      /*
      this.opts.sendRpc.call(this, "enq_getAllTransactions", {
        address: "H92R1kj4cJiuSdGBRAW5jX4g4ngff4oGQ3bFffJC7xPj"
      })
      this.opts.sendRpc.call(this, "enq_getBalance", {
        address: "H92R1kj4cJiuSdGBRAW5jX4g4ngff4oGQ3bFffJC7xPj"
      })*/
    },
    components: {
      topHeader,
      sidebar,
      sidebarMobile
    }
  }
</script>

