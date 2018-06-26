<template>
<div class="d-flex justify-between second-nav">
  <router-link :to="{name: 'Token'}">Token holding</router-link>
  <router-link :to="{name: 'Mining'}">Mining</router-link>
  <router-link :to="{name: 'Partnership'}">Partnership</router-link>
  <router-link :to="{name: 'All Info'}">All info</router-link>
</div>
</template>

<script>
    export default {
        name: "secondNav"
    }
</script>

<style scoped>

</style>
