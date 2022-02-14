import Vue from 'vue';
import Vuex from 'vuex';

import modal from './modules/modal';
import packages from './modules/packages';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        modal,
        packages,
    }
});

export default store

