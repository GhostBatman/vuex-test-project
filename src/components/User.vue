<template>
  <div class="user">
    <div class="id">{{ user.id }}</div>
    <div class="avatar">
      {{ `${user.name[0]}${user.secondName[0]}`.toUpperCase()}}
    </div>
    <div class="name">
      {{ `${user.name} ${user.secondName }` }}
    </div>
    <div class="age">
      <span>{{ user.age }}</span>
      <span class="label">лет</span>
    </div>
    <div class="rating">
      <span>{{ user.rating }}</span>
      <span class="label">Баллов</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object, default: () => ({})
    }
  }
}
</script>

<style scoped lang="sass">
.user
  display: flex
  align-items: center
  width: 100%
  padding: 20px

  .age,
  .rating
    display: flex
    flex-direction: column
    font-size: 16px
    color: black
    font-weight: 600
    width: 100px
    margin-right: 20px

    .label
      font-weight: 400
      font-size: 14px

  .name
    width: 400px
    margin-right: 20px
    font-weight: 600
    font-size: 16px

  .avatar
    margin-right: 20px
    font-size: 20px
    width: 50px
    height: 50px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    color: white
    background-color: #29e7ff

  .id
    font-size: 16px
    margin-right: 20px
    width: 20px
    color: black

</style>