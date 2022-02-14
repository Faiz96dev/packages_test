<template>
  <div>
    <div v-if=" item.package && !loading" @click="handleItemClick" class="flex justify-between border
  bg-white hover:-translate-y-1  hover:bg-gray-200
  border-gray-400 shadow-md rounded-md cursor-pointer m-2 p-2">
      <div>
        {{ item.package.name }}
      </div>
      <div>
        {{ item.package.version }}
      </div>
    </div>

    <div v-else class="flex justify-between border animate-pulse bg-gray-200
  bg-white hover:-translate-y-1  hover:bg-gray-200
  border-gray-400 shadow-md rounded-md cursor-not-allowed m-2 p-2">
      <div class="bg-gray-400 h-6 w-16 rounded-md ">
      </div>
      <div class="bg-gray-400 h-6 w-10 rounded-md ">
      </div>
    </div>

  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PackageItem",
  props:{
    item:{
      type: Object
    }
  },
  computed:{
    ...mapGetters({loading:'packages/getLoading'})
  },
  methods: {
    ...mapActions({setShowModal: 'modal/toggleModal', setCurrentPackage:'packages/setCurrentPackage' }),
    handleItemClick() {
      this.setCurrentPackage(this.item)
    }
  }
}
</script>

<style scoped>

</style>