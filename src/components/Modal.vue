<template>
  <transition name="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <h2 class="text-2xl">{{ currentPackage.package.name }}</h2>
            <div class="mt-4 mb-4">
              <div class="flex">
                <p>Homepage:</p> <a
                  :href="currentPackage.package.links.homepage">{{ currentPackage.package.links.homepage }}</a>

              </div>
              <div class="flex">
                <p>Repository:</p> <a
                  :href="currentPackage.package.links.repository">{{ currentPackage.package.links.repository }}</a>

              </div>
            </div>
            <div class="my-3 my-3"><p>Description:</p> <span v-html="currentPackage.package.description"></span></div>
            <div class="my-3 flex flex-wrap">
              Keywords:
                <div class="m-1 bg-gray-400 text-white rounded-lg p-1 " :key="i"
                     v-for="i in currentPackage.package.keywords">{{ i }}
                </div>
            </div>
          </div>
          <button @click="toggleModal(false)"
                  class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Modal",
  methods: {
    ...mapActions({toggleModal: 'modal/toggleModal'})
  },
  computed: {
    ...mapGetters({showModal: 'modal/getModal', currentPackage: 'packages/getCurrentPackage'})
  }

}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>