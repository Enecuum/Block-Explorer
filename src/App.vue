<template>
  <div id="app">
    <topHeader></topHeader>
    <router-view/>
  </div>
</template>

<script>
  import topHeader from "@/components/layout/header"

export default {
  name: 'App',
  created() {
    this.$options.sockets.onmessage = (data) => console.log('[WS]', data)
  },
  components: {
    topHeader
  }
}
</script>

