<template>
  <div></div>
</template>

<script>

  export default {
    name: 'Explorer',
    data() {
      return {}
    },
    beforeMount() {
      this.$socket.sendRpc('enq_getChainInfo', {}).then(response => {
        this.$router.replace({name: 'Block', params: {id: response.lastKBlock}})
    })
    }
  }
</script>
