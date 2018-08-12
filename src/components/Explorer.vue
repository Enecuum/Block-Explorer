<template>
  <b-container fluid class="container-wrapper">
    <b-row>
      <b-col >
        <b-table striped hover responsive :items="items" :fields="fields">

          <template slot="number" slot-scope="data">
              <router-link class="href" :to="{name: 'Block', params: {id: data.item.number}}">
                {{data.item.number }}
              </router-link>
          </template>

          <template slot="prev_hash" slot-scope="data">
            <router-link class="href" :to="{name: 'Block', params: {id: data.item.prev_hash}}">
              {{data.item.prev_hash}}
            </router-link>
          </template>

          <template slot="solver" slot-scope="data">
              <router-link class="href" :to="{name: 'Wallet', params: {id: data.item.solver}}">
                {{data.item.solver }}
              </router-link>
          </template>

        </b-table>

          <b-pagination class="mt-10" @change="loadTable" align="center" :total-rows="total" v-model="currentPage" :per-page="perPage"></b-pagination>
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
          {key: 'prev_hash', label: 'Prev hash', tdClass: 'weight-600'},
          {key: 'nonce', label: 'Nonce', tdClass: 'weight-600'},
          {key: 'solver', label: 'Miner', tdClass: 'weight-600'},
        ],
      }
    },
    methods: {
      reload() {
        if(this.$root.ws.ready) {
          this.$root.ws.call('getKBlockList',{page: this.currentPage, limit: this.perPage}).then(r => {
              _.assign(this.$data, _.pick( r, _.keys(this.$data)));
          });
        } else {
          setTimeout(() => {
            this.reload()
          }, 500)
        }
      },
      loadTable(e) {
        // TODO optimise count of clicking
        this.$root.ws.call('getKBlockList',{page: e, limit: this.perPage}).then(r => {
         this.items = r.items;
        });
      }
    },
    mounted() {
      this.reload();
    }
  }
</script>
