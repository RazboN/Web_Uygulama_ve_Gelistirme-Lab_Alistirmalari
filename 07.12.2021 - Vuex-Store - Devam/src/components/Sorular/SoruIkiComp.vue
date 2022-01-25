<template>
  <div>
    <h1>Bilgisayar Becerilerim</h1>
    <div v-if="yukleniyorMu">
      <base-spinner />
    </div>
    <ul v-else-if="beceriVarmi">
      <li
        v-for="(item, index) in sahipOlunanBeceriler"
        :key="index"
        :class="seviye(item.seviye)"
      >
        <h2>
          <b>{{ item.teknoloji }}</b>
        </h2>
        <p>{{ item.seviye }} %</p>
      </li>
    </ul>
    <h1 v-else>Henüz eklenen beceri yok...</h1>
    <base-dialog :title="title" :show="show" @close="dialogKapat">{{
      this.error
    }}</base-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // beceriler: [],
      error: "",
      yukleniyorMu: false,
      isLolading: false,
      beceriVarMi: true,
      show: false,
      title: "Hata Oluştu!",
    };
  },
  methods: {
    dialogKapat() {
      this.show = false;
    },
    seviye(deger) {
      if (!deger) return;
      if (deger <= 30) {
        return "baslangic";
      } else if (30 < deger && deger < 70) {
        return "orta";
      } else return "iyi";
    },
    async becerileriYukle() {
      try{
        this.yukleniyorMu = true;
  
        await this.$store.dispatch('beceriler/becerileriAl');
  
        // this.yukleniyorMu = false;

      }catch(error){
        this.show = true;
        this.error = error.message;
      }

      this.yukleniyorMu = false;
    },
  },
  mounted() {
    this.becerileriYukle();
  },
  computed: { 
    sahipOlunanBeceriler() {
      return this.$store.getters["beceriler/sahipOlunanBeceriler"];
    },

    //!!!! *****
    beceriVarmi() {
      return !this.yukleniyorMu && this.$store.getters["beceriler/beceriVarMi"];
    },
  },
};
</script>

<style scoped>
h2,
li p {
  text-align: left;
  color: white;
}

.baslangic {
  background-color: black;
}
.orta {
  background-color: blue;
}
.iyi {
  background-color: red;
}

li {
  list-style: none;
  max-width: 70%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #8ddba4;
  margin-bottom: 1rem;
  margin-left: 15%;
}
</style>