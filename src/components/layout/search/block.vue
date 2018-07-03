<template>
  <b-container fluid>
    <b-row class="gray-row pb-15 pt-15">
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <p class="font-18 weight-700 m-0">Block #4720582</p>
        <p class="m-0 weight-600">Hash:
          <span class="pl-2">vhg4ie8yg745y8g9ruvb40i1</span>
        </p>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-container fluid class="block-container divider-row">
        <b-row class="block-wrapper pt-20 pb-20 mx-auto">

          <b-col class="text-left">

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Height:</b-col>
              <b-col class="weight-600 p-0">4720582</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Size:</b-col>
              <b-col class="weight-600 p-0">97383383939 bytes</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Difficulty:</b-col>
              <b-col class="weight-600 p-0">1111</b-col>
            </b-row>

            <b-row>
              <b-col class="weight-600 block-description-text p-0">Microblocks attached:</b-col>
              <b-col class="weight-600 p-0">11110000</b-col>
            </b-row>

          </b-col>

          <b-col class="text-left">

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Transactions:</b-col>
              <b-col class="weight-600 p-0">113</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Generation time:</b-col>
              <b-col class="weight-600 p-0">5 min</b-col>
            </b-row>

            <b-row class="mb-10">
              <b-col class="weight-600 block-description-text p-0">Miner:</b-col>
              <b-col class="weight-600 p-0">
                <router-link :to="{name: 'Index'}" class="block-a">chwi3f83yv943uv9</router-link>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="weight-600 block-description-text p-0">Reward:</b-col>
              <b-col class="weight-600 p-0">12.5 ENQ</b-col>
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
