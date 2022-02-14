import axios from "axios";
import {BASE_URL} from "@/helpers/apiHelper";
// import {debounce} from "@/helpers/helper";

export default {
    namespaced: true,
    state: {
        packages: [],
        loading: false,
        page: 1,
        quantity: 10,
        searchField: 'tailwind',
        total: 0,
        currentPackage:{}
    },
    mutations: {
        SET_PACKAGES(state, val) {
            state.packages = val
        },
        SET_LOADING(state, val) {
            state.loading = val
        },
        SET_PAGE(state, val) {
            state.page = val
        },
        SET_QUANTITY(state, val) {
            state.quantity = val
        },
        SET_TOTAL(state, val) {
            state.total = val
        },
        SET_SEARCH_VAL(state, val) {
            state.searchField = val
        },
        SET_CURRENT_PACKAGE(state, val) {
            state.currentPackage = val
        },
    },
    actions: {
        setFieldVal({commit}, val) {
            commit('SET_SEARCH_VAL', val)
        },
        setCurrentPackage({commit}, val) {
            if (!val) commit('modal/SET_MODAL', false, { root: true })
            commit('SET_CURRENT_PACKAGE', val)
            commit('modal/SET_MODAL', true, { root: true })
        },
        setPage({commit, dispatch}, val) {
            commit('SET_PAGE', val)
            dispatch('fetchPackages')
        },
        fetchPackages({commit, state}, params) {
            commit('SET_LOADING', true)
            axios
                .get(BASE_URL, {params: {text: state.searchField, size: state.quantity, from: state.page, ...params}})
                .then(response => {
                    commit('SET_TOTAL', response.data.total)
                    commit('SET_PACKAGES', response.data.objects)
                })
                .catch(error => {
                    console.log(error);
                    commit('SET_LOADING', false)
                })
                .finally(() => (commit('SET_LOADING', false)));
        },
        setSearchVal({commit}, val) {
            commit('SET_SEARCH_VAL', val)
        }
    },

    getters: {
        getPackages: state => {
            return state.packages
        },
        getTotal: state => {
            return state.total
        },
        getSearchField: state => {
            return state.searchField
        },
        getLoading: state => {
            return state.loading
        },
        getPage: state => {
            return state.page
        },
        getCurrentPackage: state => {
            return state.currentPackage
        },

    },
};