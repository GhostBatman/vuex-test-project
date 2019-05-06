import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({

  state: {
    searchText: '',
    usersList: [],
    filteredUsers: []
  },
  getters: {},
  mutations: {
    updateUsers (state, payload) {
      state.usersList = payload
    },
    updateFilteredUsers (state, payload) {
      state.filteredUsers = payload
    },
  },
  actions: {},
})

