import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({

  state: {
    usersList: [],
    searchText: ''
  },
  getters: {
    filteredUsers: state => {
      if (typeof state.searchText[0] !== 'undefined') {
        return [...state.usersList].filter((user) => {
          return `${ user.name } ${ user.secondName }`.toLowerCase().indexOf(state.searchText.toLowerCase()) !== -1
        })
      } else return state.usersList
    },
  },
  mutations: {
    updateUsers (state, payload) {
      state.usersList = payload
    },
    updateSearchText (state, payload) {
      state.searchText = payload
    },
  },
  actions: {},
})

