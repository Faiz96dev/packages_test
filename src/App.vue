<template>
  <div class="flex justify-center ">
    <div class="w-1/2">
      <Modal/>
      <SearchField/>
      <PackageContainer class="mt-4"/>
      <Pagination/>
    </div>
  </div>
</template>

<script>
import SearchField from './components/SearchField.vue'
import PackageContainer from "@/./components/PackageContainer";
import Pagination from "@/./components/Pagination";
import Modal from "@/./components/Modal";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    Modal,
    Pagination,
    PackageContainer,
    SearchField
  },
  methods: {
    ...mapActions({fetchPackages: 'packages/fetchPackages'})
  },
  computed: {
    ...mapGetters({total: 'packages/getTotal'})
  },
  created() {
    this.fetchPackages()
  }
}
</script>

<style>

</style>
