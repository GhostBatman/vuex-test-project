<template>
  <div id="app">
    <div class="wrapper">
      <search-users />
      <sort-users />
      <div class="users">
        <user
          v-for="user in filteredUsers"
          :key="user.id"
          :user="user">
        </user>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data'
import User from './components/User'
import SortUsers from './components/SortUsers'
import SearchUsers from './components/SearchUsers'

export default {
  name: 'app',
  components: {
    SearchUsers,
    SortUsers,
    User
  },
  filter: {},
  created () {
    this.$store.commit('updateUsers', data.users)
  },
  computed: {
    filteredUsers () {
      return this.$store.getters.filteredUsers
    },
    searchText () {
      return this.$store.state.searchText
    }
  },
}
</script>

<style scoped lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  display: flex

  .wrapper
    box-sizing: border-box
    margin: 0 auto
    max-width: 1200px
    flex-grow: 1
    display: flex
    flex-direction: column
    padding: 20px 100px

  .users
    display: flex
    flex-direction: column
</style>
