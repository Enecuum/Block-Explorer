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
        <b-dropdown text="EN">
          <b-dropdown-item>EN</b-dropdown-item>
          <b-dropdown-item>CHI</b-dropdown-item>
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
