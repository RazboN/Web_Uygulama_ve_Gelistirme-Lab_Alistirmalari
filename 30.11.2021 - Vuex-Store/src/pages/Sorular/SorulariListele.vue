<template>
  <section>
    <base-card>
      <soru-listele />
    </base-card>
  </section>
</template>

<script>
import SoruListele from '../../components/Sorular/SoruIkiComp.vue';

export default {
  components: {
    SoruListele,
  },
};
</script>