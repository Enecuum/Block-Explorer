<template>
  <b-container fluid class="container-wrapper">

    <b-row class="m-0 mb-20 pb-20 border-bottom-gray">

      <b-col class="d-flex pr-0 pl-0 align-items-center justify-content-center">
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30px" height="39px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 3385608 4271657">
               <g>
                <g>
                 <path fill="#00ADD9" fill-rule="nonzero" d="M1705724 2523665l3384 1400936 1198102 -697001 0 -1397798 -1201486 693863zm-1644139 -1015988l1454761 -840396c39625,-22950 86764,-21381 123830,0l1454926 840396c45900,26583 68272,78344 59769,127794l0 1662960c-413,42598 -22455,83958 -61916,106825l-1411007 820914c-49532,60676 -158007,60594 -207375,-248l-1411007 -820666c-39460,-22867 -61502,-64227 -61585,-106825l-330 -1664281c-4458,-27243 165,-55889 15025,-81563 11227,-19318 26830,-34508 44909,-44910zm1389213 1015988l-1201486 -693946 0 1397881 1198184 697001 3302 -1400936zm127463 -1606989l-1207843 697743 1207843 697744 1207925 -697744 -1207925 -697743zm1807347 -518767c0,219675 -178151,397743 -397908,397743 -219758,0 -397909,-178068 -397909,-397743 0,-219841 178151,-397909 397909,-397909 219757,0 397908,178068 397908,397909z"/>
                 <path fill="white" fill-rule="nonzero" d="M3056714 194249c0,38057 -30957,69015 -69014,69015 -38058,0 -69015,-30958 -69015,-69015l0 -7100c0,-38057 30957,-69015 69015,-69015 38057,0 69014,30958 69014,69015l0 7100zm-82 431095c0,43258 -30875,78343 -68932,78343 -38058,0 -68933,-35085 -68933,-78343l0 -227518c0,-43258 30875,-78343 68933,-78343 38057,0 68932,35085 68932,78343l0 227518z"/>
                </g>
               </g>
              </svg>
        <h1 class="weight-600 m-0">
          Send Transaction
        </h1>
      </b-col>

    </b-row>

    <b-row class="mt-20">
      <b-col>

        <b-form>
          <b-row>
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              From:
            </b-col>

            <b-col>
              <div class="d-flex">
                <b-input v-model="owner" class="transaction border-radius-right-0"></b-input>
                <b-btn @click="generateTx" class="transaction-button font-14 weight-600 border-radius-left-0">
                  GenerateTx
                </b-btn>
              </div>
            </b-col>

          </b-row>

          <b-row class="mt-10">
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              To:
            </b-col>
            <b-col>
              <b-input v-model="receiver" class="transaction"></b-input>
            </b-col>
          </b-row>

          <b-row class="mt-10">
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              Amount:
            </b-col>
            <b-col>
              <b-input v-model="amount" class="transaction"></b-input>
            </b-col>
          </b-row>

          <b-row class="mt-10">
            <b-col class="d-flex justify-content-center">
              <b-btn class="transaction-button font-14 weight-600">
                Generate transaction
              </b-btn>
            </b-col>
          </b-row>


        </b-form>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
    name: "sendTransaction",
    data() {
      return {
        owner: "",
        receiver: "",
        amount: "",
        currency: "ENQ",
        uuid: _.random(1, 100),
        sign: {
          sign_s:"",
          sign_r:""
        },
        timestamp: ""
      }
    },
    methods: {
      generateTx() {
        this.owner = "123"
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
