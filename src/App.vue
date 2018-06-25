<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$options.sockets.onmessage = (data) => console.log('[WS]', data)
  }
}
</script>

