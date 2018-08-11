<template>

  <b-container fluid class="h-100">
    <b-row>
      <b-col>

        <b-container fluid class="container-wrapper">

          <b-row class="m-0 mb-20 pb-20 border-bottom-gray">

            <b-col class="d-flex align-items-center justify-content-center pl-0 pr-0">
              <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30px" height="39px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 1325288 1672151"
 >
 <g>
  <g>
   <path fill="#00ADD9" d="M1325288 156760c0,86594 -70199,156793 -156793,156793 -86594,0 -156792,-70199 -156792,-156793 0,-86561 70198,-156760 156792,-156760 86594,0 156793,70199 156793,156760z"/>
   <path fill="white" fill-rule="nonzero" d="M1195690 76542c0,14996 -12199,27195 -27195,27195 -14996,0 -27195,-12199 -27195,-27195l0 -2830c0,-14996 12199,-27195 27195,-27195 14996,0 27195,12199 27195,27195l0 2830zm-33 169870c0,17045 -12166,30870 -27162,30870 -14996,0 -27162,-13825 -27162,-30870l0 -89684c0,-17046 12166,-30871 27162,-30871 14996,0 27162,13825 27162,30871l0 89684z"/>
   <path fill="#00ADD9" fill-rule="nonzero" d="M591225 274452c13012,-7547 28496,-7026 40662,0l567902 328061c13792,6506 23323,20526 23323,36791l0 660415c-130,13988 -7384,27586 -20331,35100 -186785,108649 -373895,216289 -560647,324938 -16070,16492 -45086,16492 -61156,0 -186752,-108649 -373862,-216354 -560647,-324938 -12947,-7514 -20201,-21112 -20233,-35100l-98 -660415c0,-15940 9173,-29732 22510,-36401l568715 -328451zm20331 81942l-204351 118017 204351 118018 204351 -118018 -204351 -118017zm-81096 282877l-204351 -118017 -204351 118017 204351 118050 204351 -118050zm81064 46908l-204286 118017 204318 118018 204318 -118018 -204350 -118017zm81161 -46875l204286 118050 204351 -118050 -204319 -118017 -204318 118017zm163266 235449l-203050 117269 553 236197 201944 -116651 553 -236815zm-285740 117269l-203050 -117269 553 236815 201944 116651 553 -236197zm571577 -282357l-204513 118115 0 236490 204513 -118115 0 -236490zm-855951 118083l-204513 -118115 0 236522 204513 118115 0 -236522zm0 331314l-204513 -118961 0 236360 204513 118928 0 -236327zm855951 -118961l-204513 118961 0 236327 204513 -118928 0 -236360zm-774627 165087l553 236686 201944 117431 553 -236002 -203050 -118115zm488237 236686l553 -236686 -203050 118115 553 236002 201944 -117431z"/>
  </g>
 </g>
</svg>
              <h1 class="weight-600 m-0">
                Microblock details
              </h1>
            </b-col>

          </b-row>

          <b-row class="text-center mt-10 mb-10">

            <b-col class="text-center">
              <p class="m-0 font-14 weight-600">
                Hash:
              </p>
              <div class="d-flex align-items-center">
                <div class="hash-wrapper weight-600">
                  {{ $route.params.id }}
                </div>
                <button v-clipboard:copy="$route.params.id" class="copy">Copy</button>
              </div>
            </b-col>

          </b-row>

          <b-row class="no-gutters border-bottom-gray border-top-gray">
            <b-col cols="12" sm="5" class="text-left border-bottom-gray-xs">

              <b-row class="py-1  no-gutters">
                <b-col class="weight-600 gray-text">Block:</b-col>
                <b-col class="weight-600 hash-wrapper">
                  <router-link class="href" :to="{name: 'Block', params: {id: k_block }}">{{ k_block }}</router-link>
                </b-col>
              </b-row>

            </b-col>
            <b-col cols="12" sm="5" offset-sm="2" class="text-left">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Publisher:</b-col>
                <b-col class="weight-600 hash-wrapper">
                  <router-link class="href" :to="{name: 'Wallet', params: {id: publisher}}">{{ publisher }}
                  </router-link>
                </b-col>
              </b-row>

            </b-col>
          </b-row>

          <b-row class="no-gutters border-bottom-gray ">
            <b-col cols="12" sm="5" class="text-left border-bottom-gray-xs">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Sign_s:</b-col>
                <b-col class="weight-600">{{ sign.sign_s }}</b-col>
              </b-row>

            </b-col>
            <b-col cols="12" sm="5" offset-sm="2" class="text-left ">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Sign_r:</b-col>
                <b-col class="weight-600">{{ sign.sign_r }}</b-col>
              </b-row>

            </b-col>
          </b-row>

          <!--<b-row class="no-gutters border-bottom-gray ">-->
          <!--<b-col cols="5" class="text-left">-->

          <!--<b-row class="py-1 no-gutters">-->
          <!--<b-col class="weight-600 gray-text">Size:</b-col>-->
          <!--<b-col class="weight-600">97383383939 bytes</b-col>-->
          <!--</b-row>-->

          <!--</b-col>-->
          <!--<b-col cols="5" offset="2" class="text-left">-->

          <!--<b-row class="py-1 no-gutters">-->
          <!--<b-col class="weight-600 gray-text">Miner:</b-col>-->
          <!--<b-col class="weight-600">-->
          <!--<router-link :to="{name: 'Wallet', params: {id: 'chwi3f83yv943uv9'}}" class="href">-->
          <!--chwi3f83yv943uv9-->
          <!--</router-link>-->
          <!--</b-col>-->
          <!--</b-row>-->

          <!--</b-col>-->
          <!--</b-row>-->

          <!--<b-row class="no-gutters border-bottom-gray">-->
          <!--<b-col cols="5" class="text-left">-->

          <!--<b-row class="py-1 no-gutters">-->
          <!--<b-col class="weight-600 gray-text">Transactions attached:</b-col>-->
          <!--<b-col class="weight-600">11110000</b-col>-->
          <!--</b-row>-->

          <!--</b-col>-->
          <!--<b-col cols="5" offset="2" class="text-left">-->


          <!--</b-col>-->
          <!--</b-row>-->

          <b-row class="mt-20 mx-0 pb-20 border-bottom-gray">
            <b-col class="d-flex align-items-center justify-content-center">
              <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="17px" height="20px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 523950 603031"
 >
 <g>
  <path fill="#00ADD9" fill-rule="nonzero" d="M261975 569139l230446 -134802 158 -267084 -230604 -133384 -230581 133384 157 267084 230424 134802zm254076 -112230l-246132 143961c-4748,2768 -10825,2971 -15888,0l-246109 -143961c-4614,-2746 -7742,-7787 -7742,-13548l-157 -284344c-293,-5694 2543,-11365 7809,-14426l246266 -142453c4726,-2723 10712,-2926 15753,0l246290 142453c4658,2746 7809,7809 7809,13593l-158 285177c0,5401 -2768,10645 -7741,13548zm-122065 -236320c8147,0 14763,6616 14763,14763 0,8147 -6616,14763 -14763,14763l-228420 0 40553 40531c5738,5716 5761,15055 45,20794 -5716,5738 -15056,5761 -20794,45l-64881 -64858 -135 -113 -157 -135 -113 -112 -180 -158 -68 -67 -225 -203 -45 -45 -225 -247 -22 -23 -225 -247 -23 0 -225 -270 -45 -46 -180 -225 -67 -67 -158 -203 -90 -112 -135 -180 -90 -135 -112 -135 -113 -180 -90 -113 -135 -202 -67 -113 -158 -225 -23 -67 -180 -270 0 -45 -112 -203 -68 -90 0 -23 -157 -292 -23 -45 -135 -293 -45 -67 -112 -248 -45 -112 -90 -225 -68 -158 -67 -180 -90 -180 -45 -157 -90 -225 -45 -113 -90 -270 0 -68 -113 -315 0 -45 -90 -337 -90 -360 -22 -45 -68 -315 0 -90 -67 -270 0 -45 -23 -68 -22 -247 -45 -158 -23 -225 -22 -203 -23 -157 -22 -248 0 -135 -23 -292 0 -68 -22 -337 0 -45 0 -383 0 -383 0 -45 22 -337 0 -68 23 -292 0 -135 22 -248 23 -157 22 -203 45 -225 23 -157 22 -248 23 -67 0 -45 67 -271 0 -90 68 -315 22 -45 90 -360 90 -337 0 -45 113 -315 22 -68 68 -270 45 -112 90 -225 45 -158 90 -180 67 -180 68 -158 90 -225 45 -112 112 -248 45 -67 135 -293 23 -45 157 -292 0 -23 180 -292 23 -45 157 -270 45 -68 136 -225 67 -113 135 -202 90 -113 113 -180 112 -135 90 -135 158 -180 67 -112 180 -203 45 -67 203 -225 22 -45 225 -270 23 0 225 -248 22 -22 225 -248 45 -45 225 -203 68 -67 180 -158 113 -112 157 -135 135 -113 64881 -64835c5738,-5716 15078,-5694 20794,45 5716,5739 5693,15078 -45,20794l-40531 40508 228398 0zm9520 158409l-64881 64836c-5738,5716 -15078,5693 -20794,-45 -5716,-5739 -5694,-15078 45,-20794l40531 -40509 -228398 0c-8147,0 -14763,-6616 -14763,-14762 0,-8147 6616,-14763 14763,-14763l228420 0 -40553 -40531c-5739,-5716 -5761,-15056 -45,-20794 5716,-5739 15056,-5761 20794,-45l64881 64858 135 112 157 135 113 113 180 157 67 68 225 202 45 45 225 248 23 23 225 247 22 0 226 270 45 45 180 225 67 68 158 202 90 113 135 180 90 135 112 135 113 180 90 112 135 203 67 112 158 226 22 67 180 270 0 45 113 203 67 90 0 22 158 293 22 45 135 292 45 68 113 247 45 113 90 225 68 157 67 180 90 181 45 157 90 225 45 113 90 270 0 67 113 315 0 45 90 338 90 360 22 45 68 315 0 90 67 270 0 45 23 68 22 247 45 158 23 225 22 202 23 158 22 247 0 135 23 293 0 67 22 338 0 45 0 383 0 382 0 45 -22 338 0 67 -23 293 0 135 -22 247 -23 158 -22 202 -45 225 -23 158 -22 248 -23 67 0 45 -67 270 0 90 -68 315 -22 45 -90 360 -90 338 0 45 -113 315 -22 67 -68 270 -45 113 -90 225 -45 158 -90 180 -67 180 -68 157 -90 225 -45 113 -113 247 -45 68 -135 292 -22 45 -158 293 0 22 -180 293 -22 45 -158 270 -45 68 -135 225 -67 112 -135 203 -90 112 -113 180 -112 135 -90 135 -158 180 -67 113 -180 202 -45 68 -203 225 -22 45 -226 270 -22 0 -225 248 -23 22 -225 248 -45 45 -225 202 -67 68 -180 157 -113 113 -157 135 -135 112z"/>
 </g>
</svg>
              <h4 class="m-0 weight-600">
                Transactions in the Microblock
              </h4>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-table striped hover responsive :items="transactions" :fields="fields">

                <template slot="hash" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Transaction', params: { id: data.item.hash }}">{{
                      data.item.hash }}
                    </router-link>
                  </div>
                </template>

                <template slot="tx.owner" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Wallet', params: { id: data.item.tx.owner }}">{{
                      data.item.tx.owner }}
                    </router-link>
                  </div>
                </template>

                <template slot="tx.receiver" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Wallet', params: { id: data.item.tx.receiver }}">{{
                      data.item.tx.receiver }}
                    </router-link>
                  </div>
                </template>

                <template slot="tx.amount" slot-scope="data">
                  {{data.item.tx.amount}} {{data.item.tx.currency}}
                </template>

              </b-table>
            </b-col>
          </b-row>

        </b-container>

      </b-col>
    </b-row>
  </b-container>

</template>

<script>

  export default {
    name: 'kBlock',
    data() {
      return {
        k_block: '1',
        next_block: '',
        prev_block: '',
        publisher: '1',
        transactions: [],
        sign: {},
        fields: [
          {key: 'hash', label: 'Hash', tdClass: 'weight-600'},
          {key: 'tx.owner', label: 'From', tdClass: 'weight-600'},
          {key: 'tx.receiver', label: 'To', tdClass: 'weight-600'},
          {key: 'tx.amount', label: 'Amount', tdClass: 'weight-600'}
        ]
      }
    },
    watch: {
      '$route': 'load'
    },
    methods: {
      load() {
        this.$socket.sendRpc('enq_getMicroblockByHash', {
          hash: this.$route.params.id
        }).then(microblock => {
          console.log(microblock)
        // _.assign(this.$data, _.pick(block, _.keys(this.$data)))
      }).catch(e => this.$router.replace({name: 'Search', params: {id: this.$route.params.id}})
      )
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
