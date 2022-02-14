<template>
  <div>
    <p class="mb-2">Total results: {{ total }}</p>
    <div class="border-2 border-gray-300 rounded-md p-2 h-1/2">
      <PackageItem v-for="i in getItems" :item="i" :key="i.id"/>
    </div>
  </div>
</template>

<script>
import PackageItem from "./PackageItem";
import {mapGetters} from "vuex";

export default {
  name: "PackageContainer",
  components: {PackageItem},
  computed: {
    ...mapGetters({getPackages: 'packages/getPackages', total: 'packages/getTotal'}),
    getItems() {
      return this.getPackages.length ? this.getPackages : this.items
    }
  },
  data() {
    return {
      items: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}]
    }
  }
}
</script>

<style scoped>

</style>