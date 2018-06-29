<template>
  <b-container fluid>
    <b-row class="search align-items-center">
      <b-col cols="11">

        <b-form v-if="!($route.name === 'Index')">
          <b-form-input onsubmit="event.preventDefault()" class="search-input" :class="{'is-invalid': error}"  type="text"
                        Placeholder="Type public key (waller-address) or hash of transaction/block"></b-form-input>
          <button class="d-none d-md-block search-button" type="button" onclick="return false;">Search</button>
        </b-form>

      </b-col>

      <b-col cols="1">
        <!--todo make  a select field -->
        <b-dropdown right class="dropdown-language" no-caret>
          <template slot="button-content">

            <div class="d-flex align-items-center justify-contents-between">
            <span class="font-weight-bold">EN &nbsp;</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5">
              <path fill="#595C69" fill-rule="nonzero" d="M4.716 4.864L8.61 1.077a.456.456 0 0 0 0-.659L8.324.14a.489.489 0 0 0-.677 0l-3.27 3.18L1.103.137A.482.482 0 0 0 .765 0a.483.483 0 0 0-.339.136L.14.415a.456.456 0 0 0 0 .658l3.897 3.791c.09.088.211.136.34.136.128 0 .25-.048.34-.136z"/>
            </svg>
            </div>

          </template>
          <b-dropdown-item>English</b-dropdown-item>
          <b-dropdown-item>한국</b-dropdown-item>
        </b-dropdown>
      </b-col>

    </b-row>

    <searchRequest v-if="search"></searchRequest>

  </b-container>
</template>

<script>
  import searchRequest from "@/components/layout/search/searchRequest"

  export default {
    name: "search",
    data(){
      return {
        search: true,
        error: false
      }
    },
    components: {
      searchRequest
    }
  }
</script>

<style scoped>

</style>
