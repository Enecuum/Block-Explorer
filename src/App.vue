<template>
  <div id="app">
    <topHeader></topHeader>
    <secondNav></secondNav>

    <b-container fluid>
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import topHeader from "@/components/layout/header"
  import secondNav from "@/components/layout/secondNav"

export default {
  name: 'App',
  created() {
    this.$options.sockets.onmessage = (data) => console.log('[WS]', data)
  },
  components: {
    topHeader,
    secondNav
  }
}
</script>

