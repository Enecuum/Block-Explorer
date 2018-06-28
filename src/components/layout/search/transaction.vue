<template>
  <b-container fluid>
      <b-row class="gray-row pb-15 pt-15">

        <b-container class="transaction-container">
          <b-row class="mb-10">
            <b-col class="text-left width-60 p-0">
              <p class="font-18 weight-700 m-0">From:</p>
            </b-col>
            <b-col>
              <router-link class="pl-2 block-a font-18 weight-600" :to="{name: 'Index'}">vgqq585983v6iv03cmiq4</router-link>
            </b-col>
          </b-row>
          <b-row class="mb-10">
            <b-col class="text-left width-60 p-0">
              <p class="font-18 weight-700 m-0">To:</p>
            </b-col>
            <b-col>
              <router-link class="pl-2 block-a font-18 weight-600" :to="{name: 'Index'}">vgqq585983v6iv03cmiq4</router-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="text-left p-0">
              <div class="rejected-plate font-18 weight-600">rejected</div>
              <div class="mined-plate font-18 weight-600">mined</div>
              <div class="pending-plate font-18 weight-600">pending</div>
            </b-col>
          </b-row>
        </b-container>

      </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "transaction"
    }
</script>

<style scoped>

</style>
