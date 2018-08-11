<template>
  <b-container fluid>
    <b-row>
      <b-col class="pt-10 pb-10 mb-10 about-title text-center">
        <span class="weight-700 font-20">We are ENQ</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-10 mb-10 text-justify">
        <span class="font-18">We aim to solve the 3S problem: limited speed, scalability, security. We aim to make even low power devices compatible
          with our system. We want everybody to have access to the biggest, most powerful distributed computer known to the
          human kind.</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 ">Speed</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/speed.svg"/>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 ">Scalability</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/scalability.svg"/>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 ">Security</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/security.svg"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-10 mb-10 pt-10 pb-10 about-title text-center">
        <span class="font-20 weight-700">What can ENQ give the world?</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-10 mb-10 text-justify">
        <span class="font-18">
          A HyperDAG, adapted for faster, scalable high-performance decentralized networks. SHARNELL smart contracts with
          business-oriented linear logic to avoid deadlocks. New sharding paradigm resolving the secret sharing problem. Tickets
          to provide full privacy and control over transactions and data. Priority transactions. Zero transaction fees. Our project is
          licensed under GNU GPL that makes it very attractive for the blockchain community
        </span>
      </b-col>
    </b-row>

    <b-row class="mt-10 d-none d-md-flex">
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center">HyperDAG <br> protocol</span>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center">Free instant <br> transactions</span>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center">SHARNELL <br> smart contracts</span>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center">Flexible blocks <br> & macroblocks</span>
      </b-col>
    </b-row>

    <b-row class="mt-10 align-items-baseline align-items-md-center">
      <b-col cols="6" sm="6" md="3" class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center d-block d-md-none">HyperDAG <br> protocol</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/hyperDAG.svg"/>
      </b-col>
      <b-col cols="6" sm="6" md="3" class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center d-block d-md-none">Free instant <br> transactions</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/freeTransactions.svg"/>
      </b-col>
      <b-col cols="6" sm="6" md="3" class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center d-block d-md-none">SHARNELL <br> smart contracts</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/sharnel.svg"/>
      </b-col>
      <b-col cols="6" sm="6" md="3" class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center d-block d-md-none">Flecible blocks <br> & macroblocks</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/blocks.svg"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-10 mb-10 pt-10 pb-10 about-title text-center">
        <span class="font-20 weight-700">Mobile mining</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-10 mb-10 text-justify">
        <ul class="font-18 ul-about">
          <li>
            Mobile devices used to create the backbone of the network are a key advantage for both sides: the network
            and its users.
            This is why 70% of the ENQ emission is intended for PoA mining, while 20% for PoW and 10% for PoS mining.
          </li>
          <li>
            Statistics say there are around 2.9 billions of smartphones users in 2018. In 2020 the number of smartphone
            users
            is forecast to reach 3.6 billions. New devices present an excellent opportunity for the network.
          </li>
          <li>
            The estimated minimum requirements for a mobile device to run a PoA node are: Android 5.0, 1GHz CPU and 1Gb
            RAM.
          </li>
          <li>
            Successful mobile mining intends to consume slightly more than an ordinary messenger app.
          </li>
          <li>
            While the total computational power of smartphones in 2017 was said to be 1250 petaflops, only 10% of that
            power was
            used. It would be a waste to pass on this opportunity. This power can be used in the transaction publication
            and
            validation processes, decentralized storage and help smart contracts
          </li>
        </ul>

      </b-col>
    </b-row>

    <b-row class="mt-10 mb-10 align-items-baseline ">
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center">Proof-of-Work</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/PoW.svg"/>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center ">Proof-of-Activity</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/PoA.svg"/>
      </b-col>
      <b-col class="d-flex align-items-center flex-column justify-center">
        <span class="font-18 weight-700 text-center ">Proof-of-Stake</span>
        <img class="img-about mt-10 mb-10" src="../../static/icons/about/PoS.svg"/>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
  export default {
    name: 'About',
    data() {
      return {}
    }
  }
</script>
