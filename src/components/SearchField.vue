<template>
  <div class="mb-4 mt-32">
    <input v-model="searchText" @input="getPackages"
           :class="{'animate-pulse': loading}"
           class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type="text" placeholder="Type to find ...">
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import _ from 'lodash'

export default {
  name: 'SearchField',
  props: {
    msg: String
  },
  methods: {
    ...mapActions({fetchPackages: 'packages/fetchPackages', setSearchField: 'packages/setFieldVal'}),
    getPackages: _.debounce(function () {
      this.fetchPackages()
    }, 1500)
  },
  computed: {
    ...mapGetters({fieldVal: 'packages/getSearchField', loading: 'packages/getLoading'}),
    searchText: {
      get() {
        return this.fieldVal
      },
      set(val) {
        this.setSearchField(val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
