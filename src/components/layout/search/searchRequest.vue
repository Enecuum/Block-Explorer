<template>
    <b-row>
      <block v-if="false"></block>
      <invalidRequest v-if="false"></invalidRequest>
      <transaction v-if="false"></transaction>
      <wallet v-if="false"></wallet>
    </b-row>
</template>

<script>
  import block from "@/components/layout/search/block"
  import transaction from "@/components/layout/search/transaction"
  import wallet from "@/components/layout/search/wallet"
  import invalidRequest from "@/components/layout/search/invalidRequest"

    export default {
      name: "searchResult",
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
