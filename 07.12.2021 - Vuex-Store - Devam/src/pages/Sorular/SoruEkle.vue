<template>
  <section>
    <base-card>
      <soru-ekle @beceri-ekle="beceriEkle"></soru-ekle>
    </base-card>
  </section>
</template>

<script>
import SoruEkle from '../../components/Sorular/SoruBirComp.vue';

export default {
  components: {
    SoruEkle,
  },
  methods: {
    beceriEkle(dataBeceri) {
      this.$store.dispatch('beceriler/beceriEkle', dataBeceri);
      /**
       * push kullanıldığında bir önceki sayfaya geri dönülebiliyor
       * replace kullanıldığında bir önceki sayfaya geri dönülemiyor
       */
      this.$router.replace('/soru2'); 
    },
  },
};
</script>