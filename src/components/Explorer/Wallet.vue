<template>

  <b-container fluid class="h-100">
    <div id="loadingProgressG" v-if="preload">
      <div class="loadingProgressG"></div>
    </div>

    <transition name="disappear" mode="out-in">
      <template v-if="!preload">
        <b-row>
          <b-col>

            <b-container fluid class="container-wrapper">

              <b-row class="m-0 pb-20 border-bottom-gray">

                <b-col class="d-flex align-items-center justify-content-center">
                  <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30px" height="30px"
                       version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                       image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                       viewBox="0 0 9332488 9321506">
 <g>
  <path fill="#00ADD9" fill-rule="nonzero" d="M8077404 1713924l113472 0c193355,0 369269,79021 496522,206274l22177 24546c114118,125314 184096,291108 184096,471975l0 1448653 115841 0c178282,0 322976,144693 322976,322976l0 2658735c0,178282 -144694,322975 -322976,322975l-115841 0 0 1448653c0,193355 -79021,369269 -206273,496522 -127253,127252 -303167,206273 -496522,206273l-7488081 0c-192709,0 -368192,-79452 -495875,-206919 -127899,-126607 -206920,-302521 -206920,-495876l0 -6201992c0,-192278 79237,-367762 206274,-495230 118209,-117778 275821,-194000 449582,-205843l6639086 -1697990c46939,-11842 93878,-17656 139310,-17656 162134,0 307473,70409 419223,180005 94524,92802 165578,218332 199599,350752 16148,58566 24330,119070 24330,179359l0 1003808zm-1625213 4126767c-178282,0 -322975,-144693 -322975,-322976 0,-178282 144693,-322975 322975,-322975l49308 0c178282,0 322975,144693 322975,322975 0,178283 -144693,322976 -322975,322976l-49308 0zm96462 -1329368c-276467,0 -528173,113257 -710546,295630 -215748,215748 -315870,503412 -291755,798396 46939,515469 484033,918758 1002301,918758l2030440 0 107443 0 0 -2012784 -2137883 0zm865359 -3857836l-4145499 1060222 4162940 0 0 -1003593 -2799 -20455c-1938,-13350 -7536,-25623 -14642,-36174zm776864 1706388l-7488081 0c-32728,0 -56844,24116 -56844,56844l0 6201992c0,15288 6460,29714 16795,40049 9259,10551 23685,16795 40049,16795l7488081 0c15288,0 29714,-6459 40049,-16795 10336,-10335 16795,-24761 16795,-40049l0 -1448653 -1699067 0c-454319,0 -867728,-186034 -1167018,-485324 -314148,-315871 -480588,-722820 -485110,-1167019 0,-454534 185819,-867943 485110,-1167234 299290,-299290 712484,-485109 1167018,-485109l1699067 0 0 -1448653c0,-13135 -4091,-24977 -10335,-33805l-6460 -6244c-10335,-10335 -24761,-16795 -40049,-16795z"/>
 </g>
</svg>
                  <h1 class="weight-600 m-0">
                    {{ $t('explorer.wallet.title') }}
                  </h1>
                </b-col>
              </b-row>

              <b-row class="text-center m-0 pt-10 pb-10 border-bottom-gray">

                <b-col class="text-center">
                  <avatar :hash="$route.params.id"></avatar>

                  <p class="m-0 font-14 weight-600">
                    {{ $t('explorer.wallet.balance') }}:
                    <span class="pl-2">{{ balance }} ENQ </span>
                  </p>

                  <div class="d-flex align-items-center">
                    <p class="m-0 font-14 weight-600">
                      {{ $t('explorer.wallet.hash') }}:
                    </p>
                    <div class="hash-wrapper weight-600">
                      {{ $route.params.id }}
                    </div>
                    <button v-clipboard:copy="$route.params.id" class="copy">{{ $t('explorer.wallet.copy ') }}</button>
                  </div>

                  <!-- {{ (balance * 0.04).toFixed(2) }} USD-->
                </b-col>
              </b-row>

              <template v-if="txs.length">

                <b-row class="m-0 pt-20 pb-20 border-bottom-gray ">
                  <b-col class="text-center">
                    <h4 class="m-0 weight-600">
                      {{ $t('explorer.wallet.transactions') }}
                    </h4>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>

                    <b-table striped hover responsive
                             :items="txs"
                             :fields="fields">

                      <template slot="hash" slot-scope="data">
                            <router-link class="href td-hash-wrapper" :to="{name: 'Transaction', params: {id: data.item.hash}}">
                              {{data.item.hash}}
                            </router-link>
                      </template>

                      <template slot="owner" slot-scope="data">
                        <div class="d-flex align-items-center">
                          <avatar class="mr-3" :hash="data.item.owner"></avatar>
                            <router-link class="href td-hash-wrapper"
                                         :to="{name: 'Wallet', params: {id: data.item.owner}}">
                              {{ data.item.owner }}
                            </router-link>
                        </div>
                      </template>

                      <template slot="receiver" slot-scope="data">
                        <div class="d-flex align-items-center">
                          <avatar class="mr-3" :hash="data.item.receiver"></avatar>
                            <router-link class="href  td-hash-wrapper"
                                         :to="{name: 'Wallet', params: {id: data.item.receiver}}">
                              {{ data.item.receiver }}
                            </router-link>
                        </div>
                      </template>

                      <template slot="amount" slot-scope="data">
                        {{data.item.amount}} {{ data.item.currency }}
                      </template>

                      <!--<template slot="timestamp" slot-scope="data">-->
                      <!--<div class="nowrap">-->
                      <!--{{data.item.timestamp | moment("YYYY-MM-DD HH:mm:ss")}}-->
                      <!--</div>-->
                      <!--</template>-->

                    </b-table>

                  </b-col>
                </b-row>

                <b-row v-if="!(last && currentPage == 1)">
                  <b-col>
                    <b-button-toolbar key-nav class="mt-10 justify-content-center">

                      <b-button-group class="pagination-group border-right-0">
                        <b-btn @click="fetchData(--currentPage)" :disabled="currentPage == 1"
                               class="pagination-button weight-600">
                          &lsaquo; next
                        </b-btn>

                        <b-btn class="weight-600 current-page" disabled>{{ currentPage }}</b-btn>

                        <b-btn @click="fetchData(++currentPage)"
                               :disabled="this.last" class="pagination-button border-left-0 weight-600">prev &rsaquo;
                        </b-btn>
                      </b-button-group>

                    </b-button-toolbar>
                  </b-col>
                </b-row>

              </template>

              <template>
                <b-row>
                  <b-col></b-col>
                </b-row>
              </template>

            </b-container>

          </b-col>
        </b-row>
      </template>
    </transition>
  </b-container>

</template>

<script>
  import avatar from '../Avatar'

  export default {
    name: 'Wallet',
    components: {
      'avatar': avatar
    },
    data() {
      return {
        currentPage: 1,
        balance: '0',
        emission: '0',
        last: true,
        txs: [],
        fields: [
          {key: 'hash', label: this.$i18n.t('explorer.transaction.hash'), tdClass: 'weight-600 align-middle'},
          {key: 'owner', label: this.$i18n.t('explorer.transaction.from'), tdClass: 'weight-600 align-middle'},
          {key: 'receiver', label: this.$i18n.t('explorer.transaction.to'), tdClass: 'weight-600 align-middle'},
          {key: 'amount', label: this.$i18n.t('explorer.transaction.amount'), tdClass: 'weight-600 align-middle'},
          // {key: 'timestamp', label: 'Time', tdClass: 'weight-600 align-middle'},
        ],
        preload: true
      }
    },
    watch: {
      '$route': 'load',
    },
    methods: {
      load() {
        if (this.$root.ws.ready) {
          this.fetchData()
        } else {
          setTimeout(() => {
            this.load()
          }, 500)
        }
      },

      fetchData(page = 1) {
        this.$root.ws.call('getWallet', {
          hash: this.$route.params.id,
          page: page
        }).then(r => {
          _.assign(this.$data, _.pick(r, _.keys(this.$data)))
          this.preload = false
        }).catch(e => this.$router.replace({name: 'Search', params: {id: this.$route.params.id}})
        )
      }

    },
    mounted() {
      this.load()
    }
  }
</script>
