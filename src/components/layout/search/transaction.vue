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

    <b-row>
      <b-container class="block-container divider-row">
      <b-row class="transaction-container mx-auto">
        <b-col class="p-0 mt-20 mb-20">
          <p class="mb-20 font-16 weight-600">5000 EQN</p>
          <p class="weight-600 m-0">
            <span>17.04.18</span>
            18:00
          </p>
        </b-col>
      </b-row>
      </b-container>
    </b-row>

    <b-row class="transaction-container mx-auto">
      <b-col class="p-0 mt-20 mb-20">
        <p class="weight-600 font-16 mb-20">
          <router-link class="block-a" :to="{name: 'Index'}">Block: #694839393</router-link>
        </p>
        <p class="weight-600 m-0">Hash: vhg4ie8yg745y8g9ruvb40i1</p>
      </b-col>
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
