<template>
  <div class="stub">

    <div class="stub-text">
      Coming soon
    </div>

    <b-container fluid class="container-wrapper">

      <b-row class="mt-20 pb-20 ">

        <b-col>
          <div class="gray-block text-center d-flex flex-column justify-content-between">
            <p class="font-weight-bold m-0">PoW miners</p>
            <p class="weight-600 m-0">1000000 | 20% reward</p>
          </div>
        </b-col>

        <b-col>
          <div class="gray-block text-center d-flex flex-column justify-content-between">
            <p class="font-weight-bold m-0">PoA miners</p>
            <p class="weight-600 m-0">1000000 | 70% reward</p>
          </div>
        </b-col>

        <b-col>
          <div class="gray-block text-center d-flex flex-column justify-content-between">
            <p class="font-weight-bold m-0">PoS miners</p>
            <p class="weight-600 m-0">1000000 | 10% reward</p>
          </div>
        </b-col>

      </b-row>

      <b-row class="pb-10">
        <b-col>
          <div class="gray-text font-14">Reward conditions:</div>
        </b-col>
      </b-row>

      <b-row class="pb-20 ">
        <b-col>
          <span class="font-14 weight-600">PoW solver: finding proper hash for k-block</span>
        </b-col>

        <b-col>
          <span class="font-14 weight-600">PoA publisher: publishing microblocks with transactions in them</span>
        </b-col>

        <b-col>
          <span class="font-14 weight-600">PoS: verifying the the ledger</span>
        </b-col>
      </b-row>

      <b-row class="mx-0">
        <b-col class="border-bottom-gray"></b-col>
      </b-row>

      <b-row class="mt-20 mb-20">
        <b-col>
          <span class="font-18 font-weight-bold">Growth rate of mining</span>
        </b-col>
      </b-row>

      <b-row class="mb-20">
        <b-col>
          graphic Growth rate of mining = difficulty block * time of created block
        </b-col>
      </b-row>

    </b-container>

  </div>

</template>

<script>
  export default {
    name: 'Mining',
  }
</script>

<style scoped>

</style>
