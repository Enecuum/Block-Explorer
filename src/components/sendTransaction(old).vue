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
                <b-input readonly v-model="owner.public" class="transaction border-radius-right-0"></b-input>
            </b-col>
          </b-row>

          <b-row class="mt-10">
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              private:
            </b-col>

            <b-col>
              <b-input readonly v-model="owner.private" type="password" class="transaction border-radius-right-0"></b-input>
            </b-col>
          </b-row>

          <b-row class="mt-10">
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              To:
            </b-col>
            <b-col>
              <b-input v-model="receiver" class="transaction" :class="{'error': error.receiver}"></b-input>
            </b-col>
          </b-row>

          <b-row class="mt-10">
            <b-col cols="1" class="font-14 weight-600 d-flex align-items-center">
              Amount:
            </b-col>
            <b-col>
              <b-form-input v-model="amount" class="transaction" :class="{'error': error.amount}"></b-form-input>
            </b-col>
          </b-row>
          <b-row v-if="error.amount && (amount != '') ">
            <b-col offset="1">
              <span class="text-danger">amount must be an integer</span>
            </b-col>
          </b-row>

          <b-row class="mt-20">
            <b-col class="d-flex justify-content-center">
              <b-btn @click="sendTransaction" class="transaction-button font-14 weight-600">
                Generate transaction
              </b-btn>
            </b-col>
          </b-row>

          <b-row class="mt-20 font-14 weight-600" v-if="this.items.length">
            <b-col>

            <b-table striped hover responsive :items="this.items" :fields="fields">

              <template slot="hash" slot-scope="data">
                <router-link class="href td-hash-wrapper" :to="{name: 'Transaction', params: { id: data.item.hash }}">
                  {{ data.item.hash }}
                </router-link>
              </template>

              <template slot="owner" slot-scope="data">
                <router-link class="href td-hash-wrapper" :to="{name: 'Wallet', params: { id: data.item.owner }}">
                  {{ encodeURIComponent(data.item.owner) }}
                </router-link>
              </template>

              <template slot="receiver" slot-scope="data">
                <router-link class="href td-hash-wrapper" :to="{name: 'Wallet', params: { id: data.item.receiver }}">
                  {{ encodeURIComponent(data.item.receiver) }}
                </router-link>
              </template>

              <template slot="amount" slot-scope="data">
                {{data.item.amount}} {{data.item.currency}}
              </template>

            </b-table>

            </b-col>
          </b-row>

          <b-modal ref="wallet"
                   @ok="handleOk"
                  no-close-on-esc
                  no-close-on-backdrop
                  hide-header-close
                  ok-only
                  size="lg">
            <template slot="modal-header">
                <span class="font-18 weight-600">Wallet</span>
            </template>
            <p class="mt-20">
              We do not store your key on the server. The key generation is handled on your browser only.
              <br>
              <br>
              Back up your key if you want to reuse in the future. If you lose your key, it cannot be recovered.
            </p>
              <div class="d-flex mb-20">
                <b-input v-model="owner.public" class="transaction border-radius-right-0"></b-input>
                <b-btn @click="generateTx" class="transaction-button font-14 weight-600 border-radius-left-0">
                  Generate
                </b-btn>
              </div>
          </b-modal>

        </b-form>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  const bs = require("bs58")
  const EC = require("elliptic").ec
  const ec = new EC("secp256k1")

  export default {
    name: "sendTransaction",
    data() {
      return {
        owner: {
          private: window.localStorage.owner.private || "",
          public: window.localStorage.owner.public || ""
        },
        receiver: "",
        amount: "",
        currency: "ENQ",
        uuid: _.random(1, 100),
        sign: {
          sign_s:"",
          sign_r:""
        },
        timestamp: "",
        items:[],
        fields: [
          {key: 'hash', label: 'Hash', tdClass: 'weight-600'},
          {key: 'owner', label: 'From', tdClass: 'weight-600'},
          {key: 'receiver', label: 'To', tdClass: 'weight-600'},
          {key: 'amount', label: 'Amount', tdClass: 'weight-600'}
        ],
        error: {
          amount: false,
          receiver: false
        }
      }
    },
    // watch: {
    //   amount: function(val) {
    //     if (val) {
    //       let reg = /\D+/
    //       reg.test(val) ? this.error.amount = true : this.error.amount = false
    //     }
    //   },
    //   receiver: function(val) {
    //     if (val) {
    //       let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])[\da-zA-Z]{27,34}$/
    //       reg.test(val) ? this.error.receiver = false : this.error.receiver = true
    //     }
    //   }
    // },
    methods: {
      handleOk(e){
        e.preventDefault()
        if(this.owner == ""){
          alert("please enter your key")
        } else if(this.owner.length < 32){
          alert("Key should have 32 bytes")
        } else {
            this.$refs.wallet.hide()
        }
      },

      generateTx() {
        const key = ec.genKeyPair()
        let publicKey = key.getPublic().encode("hex")
        let privateKey = key.getPrivate().toArray()

        this.owner.public = bs.encode(publicKey)
        this.owner.private = bs.encode(privateKey)

        window.localStorage.setItem("owner.public", this.owner.public)
        window.localStorage.setItem("owner.private", this.owner.private)
      },

      sendTransaction() {
        if (this.validation()){ alert("error"); return}
        this.timestamp = new Date().valueOf()

        let tx = {
          owner: this.owner,
          receiver: this.receiver,
          amount: this.amount,
          currency: this.currency,
          uuid: this.uuid,
          timestamp: this.timestamp
        }

        let bytes = bs.decode(this.owner.private).toString("hex")
        let key = ec.keyFromPublic(bytes, "hex")

        let msg = JSON.stringify(tx)
        let signature = key.sign([1,2,3,4])

        return

        let params = {
          tx: {
            owner: this.owner,
            receiver: this.receiver,
            amount: this.amount,
            currency: this.currency,
            uuid: this.uuid,
            sign: {
              sign_s: this.sign_s,
              sign_r: this.sign_r
            },
            timestamp: this.timestamp
          }
        }

        this.$root.ws.call("sendTransaction", params).then((response) =>
        {
          params.tx.hash = response
          this.items.push(params.tx)
        })
      },

      validation() {
        for (let key in this.error) {
          if(this.error[key]) return true
        }
        return false
      }
    },
    mounted() {
    // if (!window.localStorage.owner)
      this.$refs.wallet.show()
    }
  }
</script>

<style scoped>

</style>
