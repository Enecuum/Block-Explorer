<template>
  <b-container fluid>
    <b-row class="gray-row pb-15 pt-15">
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <p class="weight-600 m-0">Balance</p>
        <p class="m-0 font-18 font-weight-bold">1000000 ENQ</p>
      </b-col>
    </b-row>

    <b-row class="block-container mx-auto mt-20 mb-20">
      <b-col>
        <span class="font-16 font-weight-bold">Transaction History</span>
      </b-col>
    </b-row>

    <b-row class="block-container mx-auto">
      <b-col>
        <b-table class="table-wrapper" striped hover responsive="md" :items="items" :fields="fields" :per-page="10" :current-page="currentPage">

          <template slot="transaction" slot-scope="data">
            <router-link class="block-a" :to="{name: 'Index'}">{{data.item.transaction}}</router-link>
          </template>

          <template slot="amountOfCurrency" slot-scope="data">
            {{data.item.amountOfCurrency}} ENQ
          </template>

          <template slot="From" slot-scope="data">
            <router-link class="block-a" :to="{name: 'Index'}">{{data.item.From}} </router-link>
          </template>

          <template slot="To" slot-scope="data">
            <router-link class="block-a" :to="{name: 'Index'}">{{data.item.To}} </router-link>
          </template>
       </b-table>

        <b-pagination class="mt-20"
                      align="center"
                      size="md"
                      :per-page="10"
                      :total-rows="items.length"
                      v-model="currentPage"
                      prev-text	="Previous"
                      next-text="Next"></b-pagination>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  const items = [
    {date: '2006.03.19 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r',  typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '300'},
    {date: '2006.03.18 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '123'},
    {date: '2006.03.17 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'received', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '3'},
    {date: '2006.03.16 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '33'},
    {date: '2006.03.15 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '22'},
    {date: '2006.03.14 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '45'},
    {date: '2006.03.13 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '56'},
    {date: '2006.03.15 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'received', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '4'},
    {date: '2006.03.11 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '432'},
    {date: '2006.03.20 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '123'},
    {date: '2006.03.25 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'received', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '3'},
    {date: '2006.03.24 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '33'},
    {date: '2006.03.26 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '22'},
    {date: '2006.03.27 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '45'},
    {date: '2006.03.28 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '56'},
    {date: '2006.03.29 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'received', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '4'},
    {date: '2006.03.30 18:20:53', From: 'tbjhr9yeub8er9bbjrb0r', To: 'tbjhr9yeub8er9bbjrb0r', typeOfTransaction: 'sent', transaction: 'vhg4ie8yg745y8g9ruvb40i1', amountOfCurrency: '432'},
  ];

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
