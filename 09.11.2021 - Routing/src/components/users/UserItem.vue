<template>
  <li>
    <h3>{{ adSoyad }}</h3>
    <div class="role" :class="rolSinifi">{{ rol }}</div>
  </li>
</template>

<script>
export default {
  props: ['adSoyad', 'rol'],
  computed: {
    rolSinifi() {
      if (this.rol === 'Engineer') {
        return 'role--engineer';
      }
      if (this.rol === 'Consultant') {
        return 'role--consultant';
      }
      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: blue;
  color: white;
}

.role--consultant {
  background-color: #af003a;
  color: white;
}
</style>