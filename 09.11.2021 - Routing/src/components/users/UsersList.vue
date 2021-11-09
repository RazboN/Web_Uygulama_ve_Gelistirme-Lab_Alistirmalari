<template>
  <ul>
    <user-item 
      v-for="kullanici in kullanicilar"
      :key="kullanici.id"
      :rol="kullanici.role"
      :adSoyad="kullanici.fullName"/>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data(){
    return {
      deneme: 'Dene',
    };
  },
  components: {
    UserItem,
  },
  inject: ['kullanicilar']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>