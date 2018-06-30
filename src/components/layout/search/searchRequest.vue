<template>
    <b-row>
      <block v-if="type === 'block'"></block>
      <invalidRequest v-if="type === 'invalid'"></invalidRequest>
      <transaction v-if="type === 'transaction'"></transaction>
      <wallet v-if="type === 'wallet'"></wallet>
    </b-row>
</template>

<script>
  import block from "@/components/layout/search/block"
  import transaction from "@/components/layout/search/transaction"
  import wallet from "@/components/layout/search/wallet"
  import invalidRequest from "@/components/layout/search/invalidRequest"

    export default {
      name: "searchResult",
      props: ['type'],
      components:{
        block,
        transaction,
        wallet,
        invalidRequest
      }
    }
</script>

<style scoped>

</style>
