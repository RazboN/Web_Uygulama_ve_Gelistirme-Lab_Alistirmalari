<template>
  <ul>
    <li>
      <h3>{{ takimAdi }}</h3>
      <ul>
        <user-item
          v-for="uye in uyeler"
          :key="uye.id"
          :adSoyad="uye.fullName"
          :rol="uye.role"
        />
      </ul>
    </li>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['kullanicilar', 'takimlar'],
  props: ['takimId'],
  data() {
    return {
      takimAdi: '',
      uyeler: [],
    };
  },
  created() {
    this.uyeleriYukle(this.takimId);
  },
  methods: {
    uyeleriYukle(p_id) {
      const secilenTakim = this.takimlar.find((takim) => takim.id === p_id);
      const takimUyeleriId = secilenTakim.members;

      for (const uyeId of takimUyeleriId) {
        const secilenUye = this.kullanicilar.find(
          (kullanici) => kullanici.id === uyeId
        );
        this.uyeler.push(secilenUye);
      }
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>