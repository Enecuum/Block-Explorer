<template>
  <b-container fluid>
    <b-row class="search align-items-center">
      <b-col cols="11">

        <b-form v-if="!($route.name === 'Index')">
          <b-form-input class="search-input" :class="{'is-invalid': error}" type="text" :value="$route.params.search"
                        placeholder="Type public key (waller-address) or hash of transaction/block"
                        v-model="searchText"
                        @keydown.enter.native="toSearch"></b-form-input>
          <button class="d-none d-md-block search-button" type="button" @click="debouncedSearch">Search</button>
        </b-form>

      </b-col>

      <b-col cols="1">
        <!--todo make  a select field -->
        <b-dropdown right class="dropdown-language" no-caret>
          <template slot="button-content">

            <div class="d-flex align-items-center justify-contents-between">
            <span class="font-weight-bold">EN &nbsp;</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5">
              <path fill="#595C69" fill-rule="nonzero" d="M4.716 4.864L8.61 1.077a.456.456 0 0 0 0-.659L8.324.14a.489.489 0 0 0-.677 0l-3.27 3.18L1.103.137A.482.482 0 0 0 .765 0a.483.483 0 0 0-.339.136L.14.415a.456.456 0 0 0 0 .658l3.897 3.791c.09.088.211.136.34.136.128 0 .25-.048.34-.136z"/>
            </svg>
            </div>

          </template>
          <b-dropdown-item>English</b-dropdown-item>
          <b-dropdown-item>한국</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row v-if="$route.params.search">
      <block v-if="type === 'block'"></block>
      <invalidRequest v-if="type === 'invalid'"></invalidRequest>
      <transaction v-if="type === 'transaction'"></transaction>
      <wallet v-if="type === 'wallet'"></wallet>
    </b-row>

  </b-container>
</template>

<script>
  import _ from 'lodash'
  import block from "@/components/layout/search/block"
  import transaction from "@/components/layout/search/transaction"
  import wallet from "@/components/layout/search/wallet"
  import invalidRequest from "@/components/layout/search/invalidRequest"

  export default {
    name: "search",
    components: {
      block,
      transaction,
      wallet,
      invalidRequest
    },
    data(){
      return {
        search: true,
        types: ['transaction', 'block', 'wallet', 'invalid'],
        type: 'invalid',
        error: true,
        searchText: ''
      }
    },
    watch: {
      searchText() {
        this.debouncedSearch()
      }
    },
    methods: {
      toSearch() {
        this.type = this.types[_.random(0, this.types.length-1)];
        this.error = this.type === 'invalid';
        this.$router.push({ name: 'Token', params: { search: this.searchText }})
      }
    },
    created() {
      this.debouncedSearch = _.debounce(this.toSearch, 500)
    },
    mounted() {
      this.searchText = this.$route.params.search ? this.$route.params.search : ''
    }
  }
</script>

<style scoped>

</style>
