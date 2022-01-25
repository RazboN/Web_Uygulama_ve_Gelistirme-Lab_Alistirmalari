<template>
  <section>
    <base-dialog
      :show="diyalogGoster"
      :title="mesajKutusuBasligi"
      @close="pencereyiKapat"
    >
      <p>Aranan sayfa bulunamıyor!!</p>
    </base-dialog>
    <base-card>
      <h2>Sayfa bulunamadı</h2>
      <p>
        Sayfa bulunamıyor - bütün becerilerinizi görüntülemek için
        <router-link to="/soru2">beceriler</router-link>.
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      diyalogGoster: true,
      baslik: 'Deneme Dialog',
    };
  },
  methods: {
    pencereyiKapat() {
      this.diyalogGoster = false;
    },
  },
  computed: {
    mesajKutusuBasligi() {
      const randomNum = Math.random();
      console.warn(randomNum);
      if (randomNum < 0.5) return 'Computed Property Baslşığı < 1';
      else return 'Computed Property Baslşığı > 1';
    },
  },
};
</script>