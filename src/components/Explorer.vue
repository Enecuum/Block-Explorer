<template>
  <b-container fluid class="h-100">
    <b-row>
      <b-col>
        <b-container fluid class="container-wrapper">

          <b-row>
            <b-col>
              <h2>List of blocks</h2>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-table striped hover responsive :items="items" :fields="fields">

                <template slot="hash" slot-scope="data">
                  <router-link class="href" :to="{name: 'Block', params: {id: data.item.hash}}">
                    {{ data.item.hash }}
                  </router-link>
                </template>

                <template slot="prev_hash" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Block', params: {id: data.item.prev_hash}}">
                      {{ data.item.prev_hash }}
                    </router-link>
                  </div>
                </template>

                <template slot="solver" slot-scope="data">
                  <div class="hash-wrapper">
                    <router-link class="href" :to="{name: 'Wallet', params: {id: data.item.solver}}">
                      {{ data.item.solver }}
                    </router-link>
                  </div>
                </template>

              </b-table>

              <b-pagination class="mt-10 weight-600"
                            align="center"
                            @change="turnPage"
                            :total-rows="total"
                            :per-page="perPage"
                            v-model="currentPage">
              </b-pagination>
            </b-col>
          </b-row>
        </b-container>

      </b-col>
    </b-row>
  </b-container>

</template>

<script>

  import _ from "lodash"

  export default {
    name: 'Explorer',
    data() {
      return {
        currentPage: 1,
        perPage: 25,
        total: 0,
        items: [],
        fields: [
          {key: 'number', label: 'Height', tdClass: 'weight-600'},
          {key: 'hash', label: 'Hash', tdClass: 'weight-600 td-hash-wrapper'},
          {key: 'microblocks', label: 'Microblocks', tdClass: 'weight-600 '},
          {key: 'prev_hash', label: 'Prev hash', tdClass: 'hash-wrapper weight-600 td-hash-wrapper'},
          {key: 'nonce', label: 'Nonce', tdClass: 'weight-600'},
          {key: 'solver', label: 'Miner', tdClass: 'weight-600 td-hash-wrapper'},
        ],
      }
    },
    watch: {
      '$route': 'load'
    },
    methods: {
      load(page) {
        if (this.$root.ws.ready) {
          this.fetchData(page)
        } else {
          setTimeout(() => {
            this.load(page)
          }, 500)
        }
      },

      turnPage(page) {
        this.$router.push({name: 'ExplorerPage', params: {id: page}});
      },

      fetchData(page = 1) {
        this.$root.ws.call('getKBlockList', {page: parseInt(page), limit: this.perPage}).then(r => {
          _.assign(this.$data, _.pick(r, _.keys(this.$data)));
          this.currentPage = parseInt(page);
        });
      }
    },

    created() {
      this.load(this.$route.params.id);
    }
  }
</script>
