<template>
  <b-container fluid>
    <b-row class="gray-row pb-15 pt-15">
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <p class="weight-600 m-0">Balance</p>
        <p class="m-0 font-18 font-weight-bold">1000000 ENQ / 1000 USD</p>
      </b-col>
    </b-row>

    <b-row class="block-container mx-auto">
      <b-col>

        <b-row class="row-wallet-wrapper mt-20 mb-20">
          <b-col class="p-0">
            <span class="font-16 font-weight-bold">Transaction History</span>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper weight-600 mb-20">
          <b-col class="p-0">
            <span class="mr-4">Set period </span>
            From <input class="input-date" type="text" />
            to <input class="input-date mr-3" type="text" />
            <button class="search-button" type="button" >Search</button>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper mb-10">
          <b-col class="col-wallet-wrapper p-0">
            <span class="weight-600 font-14">Sent</span>
          </b-col>
          <b-col class="col-wallet-wrapper">
            <span class="weight-600 font-14">Sent</span>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper">
          <b-col class="col-wallet-wrapper p-0">
            <div class="wallet-pagination font-12 weight-600">345</div>
          </b-col>
          <b-col class="col-wallet-wrapper">
            <div class="wallet-pagination font-12 weight-600">345</div>
          </b-col>
        </b-row>

      </b-col>
    </b-row>


  </b-container>
</template>

<script>
  const items = [];

  export default {
    name: "wallet",
    data() {
      return {
        currentPage: 2,
        items: items,
        fields: [
          {
            key: 'date',
            label: 'Date ',
            sortable: true,
            tdClass: 'width-150 weight-600 border-bottom-0'
          },
          {
            key: 'typeOfTransaction',
            label: 'Type',
            sortable: true,
            tdClass: 'width-150 weight-600'
          },
          {
            key: 'transaction',
            label: 'Transaction',
            sortable: true,
            tdClass: ' weight-600'
          },
          {
            key: 'From',
            sortable: true,
            tdClass: ' weight-600'
          },
          {
            key: 'To',
            sortable: true,
            tdClass: ' weight-600'
          },
          {
            key: 'amountOfCurrency',
            label: 'Amount',
            sortable: true,
            tdClass: 'width-150 weight-600'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
