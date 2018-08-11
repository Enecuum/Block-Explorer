<template>

  <b-container fluid class="h-100">
    <b-row>
      <b-col>

        <b-container fluid class="container-wrapper">

          <b-row class="m-0 mb-20 pb-20 border-bottom-gray">

            <b-col class="d-flex pr-0 pl-0 align-items-center justify-content-center">
              <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30px" height="39px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 3385608 4271657"
 >
 <g>
  <g>
   <path fill="#00ADD9" fill-rule="nonzero" d="M1705724 2523665l3384 1400936 1198102 -697001 0 -1397798 -1201486 693863zm-1644139 -1015988l1454761 -840396c39625,-22950 86764,-21381 123830,0l1454926 840396c45900,26583 68272,78344 59769,127794l0 1662960c-413,42598 -22455,83958 -61916,106825l-1411007 820914c-49532,60676 -158007,60594 -207375,-248l-1411007 -820666c-39460,-22867 -61502,-64227 -61585,-106825l-330 -1664281c-4458,-27243 165,-55889 15025,-81563 11227,-19318 26830,-34508 44909,-44910zm1389213 1015988l-1201486 -693946 0 1397881 1198184 697001 3302 -1400936zm127463 -1606989l-1207843 697743 1207843 697744 1207925 -697744 -1207925 -697743zm1807347 -518767c0,219675 -178151,397743 -397908,397743 -219758,0 -397909,-178068 -397909,-397743 0,-219841 178151,-397909 397909,-397909 219757,0 397908,178068 397908,397909z"/>
   <path fill="white" fill-rule="nonzero" d="M3056714 194249c0,38057 -30957,69015 -69014,69015 -38058,0 -69015,-30958 -69015,-69015l0 -7100c0,-38057 30957,-69015 69015,-69015 38057,0 69014,30958 69014,69015l0 7100zm-82 431095c0,43258 -30875,78343 -68932,78343 -38058,0 -68933,-35085 -68933,-78343l0 -227518c0,-43258 30875,-78343 68933,-78343 38057,0 68932,35085 68932,78343l0 227518z"/>
  </g>
 </g>
</svg>
              <h1 class="weight-600 m-0">
                Block details
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
                <b-col class="weight-600 gray-text">Height:</b-col>
                <b-col class="weight-600">{{ number }}</b-col>
              </b-row>

            </b-col>

            <b-col cols="12" sm="5" offset-sm="2" class="text-left ">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Time:</b-col>
                <b-col class="weight-600">{{ time | moment("YYYY-MM-DD HH:mm") }}</b-col>
              </b-row>

            </b-col>

            <!--<b-col cols="5" offset="2" class="text-left">-->

            <!--<b-row class="py-1 no-gutters">-->
            <!--<b-col class="weight-600 gray-text">Generation time:</b-col>-->
            <!--<b-col class="weight-600">5 min</b-col>-->
            <!--</b-row>-->

            <!--</b-col>-->
          </b-row>

          <b-row class="no-gutters border-bottom-gray">

            <b-col cols="12" sm="5" class="text-left border-bottom-gray-xs">
              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Nonce:</b-col>
                <b-col class="weight-600">{{ nonce }}</b-col>
              </b-row>
            </b-col>

            <b-col cols="12" sm="5" offset-sm="2" class="text-left">
              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Solver:</b-col>
                <b-col class="weight-600 hash-wrapper">
                  <router-link :to="{name: 'Wallet', params: {id: solver}}" class="href">
                    <div class="hash-wrapper">{{ solver }}</div>
                  </router-link>
                </b-col>
              </b-row>
            </b-col>

          </b-row>

          <!--<b-row class="no-gutters border-bottom-gray ">-->

          <!--&lt;!&ndash;<b-col cols="5" class="text-left">&ndash;&gt;-->

          <!--&lt;!&ndash;<b-row class="py-1 no-gutters">&ndash;&gt;-->
          <!--&lt;!&ndash;<b-col class="weight-600 gray-text">Size:</b-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<b-col class="weight-600">97383383939 bytes</b-col>&ndash;&gt;-->
          <!--&lt;!&ndash;</b-row>&ndash;&gt;-->

          <!--&lt;!&ndash;</b-col>&ndash;&gt;-->


          <!--</b-row>-->

          <b-row class="no-gutters border-bottom-gray">
            <b-col cols="12" sm="5" class="text-left">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Microblocks attached:</b-col>
                <b-col class="weight-600">{{ microblocks.length }}</b-col>
              </b-row>

            </b-col>

            <b-col cols="12" sm="5" offset-sm="2" class="text-left">

              <b-row class="py-1 no-gutters">
                <b-col class="weight-600 gray-text">Type:</b-col>
                <b-col class="weight-600">{{ type }}</b-col>
              </b-row>

            </b-col>


          </b-row>

          <b-row class="mt-20 mx-0 pb-20 border-bottom-gray">
            <b-col class="d-flex align-items-center justify-content-center">
              <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="21px" height="25px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 1237358 1418840"
 >
 <g>
  <path fill="#00ADD9" fill-rule="nonzero" d="M108495 372053l218533 126197 218532 -126197 -218532 -126251 -218533 126251zm837717 526370l-106 252819 218745 -127207 0 -252766 -218639 127154zm-291412 168298l-53 15894 585 236607 217841 -126729 532 -242719 0 -10313 -218905 127260zm-72773 -84787l584 -239955 -53 -12705 -218904 -126409 0 5794 531 235224 53 12226 217789 125825zm36626 -315227l218479 -126197 -219330 -126728 -218532 126197 219383 126728zm592711 -329420c14991,4412 25994,18340 25994,34766l-106 333566 53 904 53 1860 -106 336384c-53,12439 -6485,24559 -18021,31257l-291890 169680c-2392,1435 -4997,2552 -7708,3349l-276156 160590c-6379,5741 -14831,9197 -24080,9197l-213 0 -425 0 -160 0 -425 0 -213 0c-9249,0 -17701,-3456 -24080,-9197l-276156 -160590c-2711,-797 -5316,-1914 -7708,-3349l-291890 -169680c-11535,-6698 -17968,-18818 -18021,-31257l-106 -336384 53 -1860 53 -904 -106 -333566c0,-14034 8027,-26260 19775,-32267l797 -425 213 -107 287106 -165853 957 -584 53 0 532 -319 290189 -167607c11588,-6698 25410,-6273 36254,0l290827 167926 0 53 797 425 798 478 106 107 282960 163407zm-629337 981935l584 -236607 -53 -15894 -218904 -127260 0 10313 531 242719 217842 126729zm291093 -463113l585 -247450 0 -5794 -218905 126409 -53 12705 585 239955 217788 -125825zm291731 -168511l0 -252872 -218639 126303 -106 252979 218745 -126410zm-1092344 0l218746 126410 -107 -252979 0 -53 -218639 -126250 0 252872zm218639 210825l-218639 -127154 0 252766 218746 127207 -107 -252819zm108070 -694350l218533 126198 218585 -126198 -218585 -126197 -218533 126197zm509360 41783l-218532 126197 218532 126250 218479 -126250 -218479 -126197z"/>
 </g>
</svg>
              <h4 class="m-0 weight-600">
                Microblocks in the Block
              </h4>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-table striped hover responsive :items="microblocks" :fields="fields">

                <template slot="hash" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'microBlock', params: {id: data.item.hash}}">{{data.item.hash
                      }}
                    </router-link>
                  </div>
                </template>

                <template slot="publisher" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Wallet', params: {id: data.item.publisher}}">
                      {{data.item.publisher}}
                    </router-link>
                  </div>
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
  import _ from 'lodash'

  export default {
    name: 'Block',
    data() {
      return {
        number: 0,
        nonce: 0,
        solver: 0,
        time: 0,
        type: 0,
        prev_hash: '',

        txs_cnt: 0,
        reward: 0,
        next_hash: '',
        microblocks: [],
        fields: [
          {key: 'hash', label: 'Hash', tdClass: 'weight-600'},
          {key: 'publisher', label: 'Publisher', tdClass: 'weight-600'},
          {key: 'sign.sign_r', label: 'Sign_r'},
          {key: 'sign.sign_s', label: 'Sign_s'},
        ]
      }
    },
    watch: {
      '$route': 'load'
    },
    methods: {
      load() {
        this.$socket.sendRpc('enq_getBlockByHash', {
          hash: this.$route.params.id
        }).then(block => {
          _.assign(this.$data, _.pick(block, _.keys(this.$data)))
      }).
        catch(e = > this.$router.replace({name: 'Search', params: {id: this.$route.params.id}})
      )
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
