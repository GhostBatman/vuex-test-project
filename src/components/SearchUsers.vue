<template>
  <div class="search-users">
    <input class="search-input"
           type="text"
           v-model="searchText"
           placeholder="search user" />
  </div>
</template>

<script>
export default {
  name: 'SearchUsers',
  data: () => ({
    searchText: ''
  }),
  methods: {
    sorting () {
      if (this.searchText === '') {
        this.$store.commit('updateFilteredUsers', this.usersList)
      } else {
        let filteredUsers = this.usersList.filter((user) => {
          return `${ user.name } ${ user.secondName }`.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
        })
        this.$store.commit('updateFilteredUsers', filteredUsers)
      }
    }
  },
  mounted () {
    this.sorting()
  },
  computed: {
    usersList () {
      return [...this.$store.state.usersList]
    }
  },
  watch: {
    searchText () {
      this.sorting()
    },
    usersList () {
      this.sorting()
    }
  }
}
</script>

<style scoped lang="sass">
.search-users
  max-width: 500px
  margin-bottom: 30px
  width: 100%
  position: relative


  input
    font-size: 16px
    border-radius: 7px
    width: 100%
    height: 36px
    padding-left: 10px
    padding-right: 40px
    box-sizing: border-box
    border: 1px solid #29e7ff


</style>