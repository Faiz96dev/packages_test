<template>
  <div class="flex justify-center mt-4 mb-4">
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px " aria-label="Pagination">
      <a @click="switchPage(i)" v-for="i in buttons" :key="i" href="#" :class="{'bg-indigo-200': getPage === i}"
         class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
        {{ i }} </a>
    </nav>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },

  computed: {
    ...mapGetters({getPage: 'packages/getPage'})
  },

  methods: {
    ...mapActions({setPAge: 'packages/setPage'}),

    switchPage(i) {
      this.setPAge(i)
    }
  }
}
</script>

<style scoped>

</style>