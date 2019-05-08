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
  watch: {
    searchText (newSearchText) {
      this.$store.commit('updateSearchText', newSearchText)
    },
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