<template>
  <div class="sort-users">
    <select v-model="sortBy"
            @change="sorting">
      <option value="age">Возрасту</option>
      <option value="rating">Рейтингу</option>
    </select>
    <select v-model="orderBy"
            @change="sorting">
      <option value="asc">по возрастанию</option>
      <option value="desc">по убыванию</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortUsers',
  data: () => ({
    sortBy: 'rating',
    orderBy: 'asc',
  }),

  methods: {
    sorting () {
      let sortedUsers = this.usersList.sort((userA, userB) => {
        if (this.orderBy === 'asc') {
          return userA[this.sortBy] > userB[this.sortBy] ? 1 : -1
        } else {
          return userA[this.sortBy] > userB[this.sortBy] ? -1 : 1
        }
      })
      this.$store.commit('updateUsers', sortedUsers)
    }
  },
  computed: {
    usersList () {
      return [...this.$store.state.usersList]
    }
  },
}
</script>

<style scoped lang="sass">
.sort-users
  display: flex
  margin-bottom: 30px

  select
    font-size: 16px
    border-radius: 7px
    height: 36px
    padding-left: 10px
    padding-right: 40px
    box-sizing: border-box
    border-color: #29e7ff
    margin-right: 30px


</style>