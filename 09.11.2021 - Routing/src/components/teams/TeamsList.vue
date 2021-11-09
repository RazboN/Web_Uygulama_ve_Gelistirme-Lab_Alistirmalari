<template>
  <ul>
    <teams-item
      v-for="takim in takimlar"
      :key="takim.id"
      :takimAdi="takim.name"
      :uyeSayisi="takim.members.length"
      :tId="takim.id"/>
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  inject: ['takimlar'],
  components: {
    TeamsItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>