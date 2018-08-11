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
  import sidebar from "@/components/layout/sidebar"
  import sidebarMobile from "@/components/layout/sidebarMobile"
  import topHeader from "@/components/layout/topHeader"

  export default {
    name: 'App',
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
    },
    mounted() {
      this.$root.ws.on('open', function(){
        this.subscribe('dashboard.stats');
        this.subscribe('dashboard.addNode');
        this.subscribe('dashboard.removeNode');
      })
    },
    components: {
      topHeader,
      sidebar,
      sidebarMobile
    }
  }
</script>

