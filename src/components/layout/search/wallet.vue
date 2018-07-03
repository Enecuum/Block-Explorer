<template>
  <b-container fluid class="mb-20">
    <b-row class="gray-row pb-15 pt-15">
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <p class="weight-600 m-0">Balance</p>
        <p class="m-0 font-18 font-weight-bold">1000000 ENQ / 1000 USD</p>
      </b-col>
    </b-row>

    <b-row class="block-container mx-auto">
      <b-col>

        <b-row class="row-wallet-wrapper mt-20 mb-20">
          <b-col class="p-0">
            <span class="font-16 font-weight-bold">Transaction History</span>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper weight-600 mb-20">
          <b-col class="p-0">
            <span class="mr-4">Set period </span>
            From <input class="input-date" type="text"/>
            to <input class="input-date mr-3" type="text"/>
            <button class="search-button" type="button">Search</button>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper mb-10">
          <b-col class="col-wallet-wrapper p-0">
            <span class="weight-600 font-14">Sent</span>
          </b-col>
          <b-col class="col-wallet-wrapper">
            <span class="weight-600 font-14">Received</span>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper mb-10">
          <b-col class="col-wallet-wrapper p-0">
            <div class="wallet-pagination font-12 weight-600 d-flex align-items-center justify-content-center">
              <svg class="wallet-arrows" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                <g fill="#595C69" fill-rule="nonzero">
                  <path
                    d="M.136 3.688L3.923.128A.478.478 0 0 1 4.253 0c.124 0 .241.045.329.128L4.86.39a.42.42 0 0 1 0 .619l-3.18 2.99L4.863 6.99a.422.422 0 0 1 0 .62l-.279.261a.478.478 0 0 1-.33.128.478.478 0 0 1-.328-.128L.136 4.31a.422.422 0 0 1 0-.621z"/>
                  <path
                    d="M5.136 3.688L8.923.128A.478.478 0 0 1 9.253 0c.124 0 .241.045.329.128L9.86.39a.42.42 0 0 1 0 .619l-3.18 2.99L9.863 6.99a.422.422 0 0 1 0 .62l-.279.261a.478.478 0 0 1-.33.128.478.478 0 0 1-.328-.128L5.136 4.31a.422.422 0 0 1 0-.621z"/>
                </g>
              </svg>
              <button class="wallet-pagination-button" type="button">Previous</button>
              <span class="wallet-pagination-gray-text">Page 1 of 1000</span>
              <button class="wallet-pagination-button" type="button">Next</button>
              <svg class="wallet-arrows" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                <g fill="#595C69" fill-rule="nonzero">
                  <path
                    d="M9.864 3.688L6.077.128A.478.478 0 0 0 5.747 0a.478.478 0 0 0-.329.128L5.14.39a.42.42 0 0 0 0 .619l3.18 2.99L5.137 6.99a.422.422 0 0 0 0 .62l.279.261a.478.478 0 0 0 .33.128.478.478 0 0 0 .328-.128L9.864 4.31a.422.422 0 0 0 0-.621z"/>
                  <path
                    d="M4.864 3.688L1.077.128A.478.478 0 0 0 .747 0a.478.478 0 0 0-.329.128L.14.39a.42.42 0 0 0 0 .619l3.18 2.99L.137 6.99a.422.422 0 0 0 0 .62l.279.261A.478.478 0 0 0 .745 8a.478.478 0 0 0 .328-.128L4.864 4.31a.422.422 0 0 0 0-.621z"/>
                </g>
              </svg>
            </div>
          </b-col>

          <b-col class="col-wallet-wrapper">
            <div class="wallet-pagination font-12 weight-600 d-flex align-items-center justify-content-center">
              <svg class="wallet-arrows" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                <g fill="#595C69" fill-rule="nonzero">
                  <path
                    d="M.136 3.688L3.923.128A.478.478 0 0 1 4.253 0c.124 0 .241.045.329.128L4.86.39a.42.42 0 0 1 0 .619l-3.18 2.99L4.863 6.99a.422.422 0 0 1 0 .62l-.279.261a.478.478 0 0 1-.33.128.478.478 0 0 1-.328-.128L.136 4.31a.422.422 0 0 1 0-.621z"/>
                  <path
                    d="M5.136 3.688L8.923.128A.478.478 0 0 1 9.253 0c.124 0 .241.045.329.128L9.86.39a.42.42 0 0 1 0 .619l-3.18 2.99L9.863 6.99a.422.422 0 0 1 0 .62l-.279.261a.478.478 0 0 1-.33.128.478.478 0 0 1-.328-.128L5.136 4.31a.422.422 0 0 1 0-.621z"/>
                </g>
              </svg>
              <button class="wallet-pagination-button" type="button">Previous</button>
              <span class="wallet-pagination-gray-text">Page 1 of 1000</span>
              <button class="wallet-pagination-button" type="button">Next</button>
              <svg class="wallet-arrows" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                <g fill="#595C69" fill-rule="nonzero">
                  <path
                    d="M9.864 3.688L6.077.128A.478.478 0 0 0 5.747 0a.478.478 0 0 0-.329.128L5.14.39a.42.42 0 0 0 0 .619l3.18 2.99L5.137 6.99a.422.422 0 0 0 0 .62l.279.261a.478.478 0 0 0 .33.128.478.478 0 0 0 .328-.128L9.864 4.31a.422.422 0 0 0 0-.621z"/>
                  <path
                    d="M4.864 3.688L1.077.128A.478.478 0 0 0 .747 0a.478.478 0 0 0-.329.128L.14.39a.42.42 0 0 0 0 .619l3.18 2.99L.137 6.99a.422.422 0 0 0 0 .62l.279.261A.478.478 0 0 0 .745 8a.478.478 0 0 0 .328-.128L4.864 4.31a.422.422 0 0 0 0-.621z"/>
                </g>
              </svg>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="p-0 mb-20">
            <b-table responsive :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">

              <template slot="hash" slot-scope="data">
                <router-link class="" :to="{name: 'Index'}">{{data.item.hash}}</router-link>
              </template>

            </b-table>

            <button @click="seeMore" class="more-collapse weight-600">{{tableLable}}</button>

          </b-col>

          <b-col class="p-0">
            <b-table responsive :items="items" :fields="fields" :per-page="3" :current-page="1">

              <template slot="hash" slot-scope="data">
                <router-link class="" :to="{name: 'Index'}">{{data.item.hash}}</router-link>
              </template>

            </b-table>
            <button  class="more-collapse weight-600">See more</button>

          </b-col>
        </b-row>


        <b-row class="row-wallet-wrapper mb-20">
          <b-col class="p-0">
            <span class="font-14 weight-600">Frequent contacts</span>
          </b-col>
        </b-row>

        <b-row class="row-wallet-wrapper mb-40">
          <b-col class="p-0">

              <router-link class="avatar" :to="{name: 'Index'}">
                <Avatar hash="012301asdgsdfghsdfhsfhsdfg230123012365478965412asdweqweqweqweqweasd"></Avatar>
                <div class="popup-href weight-600 mt-10 block-a">012301asdgsdfghsdfhsfhsdfg230123012365478965412asdweqweqweqweqweasd</div>
              </router-link>

              <router-link class="avatar" :to="{name: 'Index'}">
                <Avatar hash="012301asdgsdfghsdfhsfhsdfg2301230165478965412asdweqweqweqweqweasd"></Avatar>
                <div class="popup-href weight-600 mt-10 block-a">012301asdgsdfghsdfhsfhsdfg230123012365478965412asdweqweqweqweqweasd</div>
              </router-link>

              <router-link class="avatar" :to="{name: 'Index'}">
                <Avatar hash="012301asdgsdfghsdfhsfhsdfg23012301478965412asdweqweqweqweqweasd"></Avatar>
                <div class="popup-href weight-600 mt-10 block-a">012301asdgsdfghsdfhsfhsdfg230123012365478965412asdweqweqweqweqweasd</div>
              </router-link>

              <router-link class="avatar" :to="{name: 'Index'}">
                <Avatar hash="012301asdgsdfghsdfhsfhsdfg21230123012365478965412asdweqweqweqweqweasd"></Avatar>
                <div class="popup-href weight-600 mt-10 block-a">012301asdgsdfghsdfhsfhsdfg230123012365478965412asdweqweqweqweqweasd</div>
              </router-link>

          </b-col>
        </b-row>

      </b-col>
    </b-row>


  </b-container>
</template>

<script>
  import Avatar from "@/components/Avatar.vue"

  const items = [
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'},
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'},
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'},
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'},
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'},
    {value: '500', currency: 'ENQ', hash: 'bjhr9yeub8er9bbjrb0r'}
  ];

  export default {
    name: "wallet",
    data() {
      return {
        perPage: 3,
        tableLable: 'See more',
        currentPage: 1,
        items: items,
        fields: [
          {key: 'hiddenColumn1', thClass: 'd-none width-100', tdClass: 'wallet-td width-100 border-top-0 divider-row'},
          {key: 'value', thClass: 'd-none', tdClass: 'wallet-td width-100 border-top-0 divider-row'},
          {key: 'currency', thClass: 'd-none', tdClass: 'wallet-td width-100 border-top-0 divider-row'},
          {key: 'hash', thClass: 'd-none', tdClass: 'wallet-td text-right border-top-0 divider-row'},
          {key: 'hiddenColumn2', thClass: 'd-none width-100', tdClass: 'wallet-td width-100 border-top-0 divider-row'}
        ]
      }
    },
    methods: {
      seeMore(e){
        this.perPage === 6 ? this.perPage = 3 : this.perPage = 6;
        this.tableLable === 'See more' ? this.tableLable = 'See less' : this.tableLable = 'See more';
      },
    },
    components: {Avatar}
  }
</script>

<style scoped>

</style>
