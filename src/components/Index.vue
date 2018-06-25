<template>
  <div>
    You are interested in:<br/>
    <router-link :to="{ name: 'Token' }">Token holder</router-link>
    <router-link :to="{ name: 'Mining' }">Mining</router-link>
    <router-link :to="{ name: 'Partnership' }">Partnership</router-link>
    <router-link :to="{ name: 'All Info' }">All info</router-link>
    <router-link :to="{ name: 'Index' }">Index</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>
