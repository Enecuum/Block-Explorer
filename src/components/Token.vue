<template>

  <b-container>
    <b-row v-if="!$route.params.search">
      <b-col>
        <p class="font-18 weight-600 text-center">Here you can search for particular transaction, block or wallet</p>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>

export default {
  name: 'Token',
  data () {
    return {

    }
  }
}
</script>
