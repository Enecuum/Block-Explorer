<template>
  <div id="app">
    <div class="sticky">
      <topHeader></topHeader>
      <secondNav v-if="!($route.name === 'Index')"></secondNav>
      <search></search>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  import topHeader from "@/components/layout/header"
  import secondNav from "@/components/layout/secondNav"
  import search from "@/components/layout/search"

  export default {
    name: 'App',
    created() {
      this.$options.sockets.onmessage = (data) => console.log('[WS]', data)
    },
    components: {
      topHeader,
      secondNav,
      search
    }
  }
</script>

