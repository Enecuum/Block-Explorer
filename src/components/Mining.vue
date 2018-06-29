<template>
  <b-container fluid class="block-container">
    <b-row>
      <b-col>
        <span class="font-18 font-weight-bold">PoW, PoA, PoS, miners</span>
      </b-col>
    </b-row>

    <b-row class="mt-20 mb-20">

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

    <b-row class="mb-20">
      <b-col>
        <div class="divider-row"></div>
      </b-col>
    </b-row>

    <b-row class="mb-20">
      <b-col>
        <span class="font-18 font-weight-bold">Last blocks</span>
      </b-col>
    </b-row>

    <b-row class="mb-20">
      <b-col>
          <b-table responsive="md" small striped hover :items="blocks" :fields="blocksFields" >
            <template slot="Height" slot-scope="data">
              <router-link class="block-a weight-600" :to="{name: 'Index'}">{{data.item.Height}}</router-link>
            </template>

            <template slot="Hash" slot-scope="data">
              <router-link class="block-a weight-600" :to="{name: 'Index'}">{{data.item.Hash}}</router-link>
            </template>

            <template slot="Size" slot-scope="data">
              {{data.item.Size}} bytes
            </template>

            <template slot="GenerationTime" slot-scope="data">
              {{data.item.GenerationTime}} min
            </template>

            <template slot="Miner" slot-scope="data">
              <router-link class="block-a weight-600" :to="{name: 'Index'}">{{data.item.Miner}}</router-link>
            </template>

            <template slot="Reward" slot-scope="data">
              {{data.item.Reward}} ENQ
            </template>

          </b-table>

        <router-link :to="{name: 'Index'}" class="block-a weight-600 mt-20">All list of blocks</router-link>

      </b-col>
    </b-row>

    <b-row class="mb-20">
      <b-col>
        <div class="divider-row"></div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <span class="font-18 font-weight-bold">Last transactions</span>
      </b-col>
    </b-row>

    <b-row class="mb-20">
      <b-col>
          <b-table responsive="md" small striped hover :items="transactions" :fields="transactionsFields" >

            <template slot="Hash" slot-scope="data">
              <router-link class="block-a" :to="{name: 'Index'}">{{data.item.Hash}}</router-link>
            </template>

            <template slot="Block" slot-scope="data">
              <router-link class="block-a weight-600" :to="{name: 'Index'}">{{data.item.Block}}</router-link>
            </template>

            <template slot="From" slot-scope="data">
              <router-link class="block-a" :to="{name: 'Index'}">{{data.item.From}}</router-link>
            </template>

            <template slot="To" slot-scope="data">
              <router-link class="block-a" :to="{name: 'Index'}">{{data.item.To}}</router-link>
            </template>

            <template slot="Value" slot-scope="data">
              {{data.item.Value}} ENQ
            </template>

          </b-table>

        <router-link :to="{name: 'Index'}" class="block-a weight-600 mt-20">All list of blocks</router-link>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  let blocks = [
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'},
    {Height: '948372', Hash: 'bjhr9yeub8er9bbjrb0', Size: '8083739',Transactions: '180', GenerationTime: '5', Miner: 'bjhr9yeub8er9bbjrb0r', Reward: '5000'}
  ];

  let transactions= [
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'},
    {Hash: 'bjhr9yeub8er9bbjrb0r', Block: '948372 ', From: 'bjhr9yeub8er9bbjrb0r', To: 'bjhr9yeub8er9bbjrb0r', Value: '5000'}
  ];

export default {
  name: 'Mining',
  data () {
    return {
      blocks: blocks,
      blocksFields: [
        {key: 'Height', thClass: 'border-bottom-0 border-top-0'},
        {key: 'Hash', thClass: 'border-bottom-0 border-top-0'},
        {key: 'Size', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'Transactions', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'GenerationTime',label: 'Generation time', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'Miner', thClass: 'border-bottom-0 border-top-0'},
        {key: 'Reward', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
      ],

      transactions: transactions,
      transactionsFields: [
        {key: 'Hash', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'Block', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'From', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'To', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
        {key: 'Value', thClass: 'border-bottom-0 border-top-0', tdClass: 'weight-600'},
      ],
    }
  }
}
</script>
