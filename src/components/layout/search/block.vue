<template>
  <b-container fluid>
    <b-row class="gray-row pb-15 pt-15">
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <p class="font-18 weight-700 m-0">Block #4720582</p>
        <p class="m-0">Hash:
          <router-link class="pl-2 block-a weight-600" :to="{name: 'Index'}">vhg4ie8yg745y8g9ruvb40i1</router-link>
        </p>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-container fluid class="block-container divider-row">
        <b-row class="block-wrapper pt-20 pb-20 mx-auto">

          <b-col class="text-left">

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Height:</b-col>
              <b-col class="weight-600">4720582</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Size:</b-col>
              <b-col class="weight-600">97383383939 bytes</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Difficulty:</b-col>
              <b-col class="weight-600">1111</b-col>
            </b-row>

            <b-row>
              <b-col class="weight-600 block-description-text">Microblocks attached:</b-col>
              <b-col class="weight-600">11110000</b-col>
            </b-row>

          </b-col>

          <b-col class="text-left">

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Transactions:</b-col>
              <b-col class="weight-600">113</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Generation time:</b-col>
              <b-col class="weight-600">5 min</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text">Miner:</b-col>
              <b-col class="weight-600">chwi3f83yv943uv9</b-col>
            </b-row>

            <b-row>
              <b-col class="weight-600 block-description-text">Reward:</b-col>
              <b-col class="weight-600">12.5 ENQ</b-col>
            </b-row>

          </b-col>

        </b-row>

      </b-container>
    </b-row>

    <b-row class="mt-20 mb-20">
      <b-container fluid class="block container">
        <b-row>

          <b-col class="text-right">
            <router-link class="block-a weight-600" :to="{name: 'Index'}">Prev block №4720581</router-link>
          </b-col>

          <b-col class="text-left">
            <router-link class="block-a weight-600" :to="{name: 'Index'}">Next block №4720583</router-link>
          </b-col>

        </b-row>
      </b-container>
    </b-row>

  </b-container>
</template>

<script>
  export default {
    name: "block"
  }
</script>

<style scoped>

</style>
