<template>
  <div class="d-flex justify-between second-nav">
    <router-link :to="{name: 'Token'}">Token holding
      <div class="index-popup">Information relative to ordinary users:
        wallet balance, transaction history,
        transaction status, microblock
        information, etc.
      </div>
    </router-link>
    <router-link :to="{name: 'Mining'}">Mining
      <div class="index-popup">
        More technical information: current network hashrate, emission, current difficulty, number of active miners,
        ratio of PoW-PoA-PoS miners, current reward allocation scheme, etc.
      </div>
    </router-link>
    <router-link :to="{name: 'Partnership'}">Partnership
      <div class="index-popup">
        More technical and business details: global network stats, transaction per day, transaction fee, private chains,
        marks, growth rate of nodes in the network, location map for the nodes, business contacts, etc.
      </div>
    </router-link>
    <router-link :to="{name: 'All Info'}">All info
      <div class="index-popup">
        All details combined, including technical, business and information for ordinary users.
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "secondNav"
  }
</script>

<style scoped>

</style>
