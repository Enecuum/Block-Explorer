<template>
  <b-container fluid>
    <b-row class="gray-row">

      <b-container class="first-slide-wrapper">
        <b-row class="h-100 align-items-center">
          <b-col>
            <span class="font-weight-bold font-18">You are interested in:</span>
          </b-col>
          <b-col>
            <span class="gray-text">You will be able to change this preference later</span>
          </b-col>
        </b-row>
      </b-container>

    </b-row>

    <b-row>
      <b-container class="first-slide-wrapper">
        <b-row>
          <b-col>
            <ul class="ul-nav">
              <li>
                <router-link :to="{name: 'Token'}">Token holder</router-link>
                <div class="index-popup">Information relative to ordinary users:
                  wallet balance, transaction history,
                  transaction status, microblock
                  information, etc.
                </div>
              </li>
              <li>
                <router-link :to="{ name: 'Mining' }">Mining</router-link>
                <div class="index-popup"></div>
              </li>
              <li>
                <router-link :to="{ name: 'Partnership' }">Partnership</router-link>
                <div class="index-popup"></div>
              </li>
              <li>
                <router-link :to="{ name: 'All Info' }">All info</router-link>
                <div class="index-popup"></div>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </b-row>

  </b-container>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {}
    }
  }
</script>
