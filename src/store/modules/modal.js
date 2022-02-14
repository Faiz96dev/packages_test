export default {
    namespaced: true,
    state: {
        showModal: false,
    },
    mutations: {
        SET_MODAL(state, val) {
            state.showModal = val
        },
    },
    actions: {
        toggleModal({commit}, val) {
            commit('SET_MODAL', val)
        },
    },
    getters: {
        getModal: state => {
            return state.showModal
        },
    },
};