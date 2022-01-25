<template>
  <div class="row">
    <div class="column left">
      <h2>Not Girişi</h2>
      <hr />
      <p>Deneme....</p>
    </div>
    <div class="column right">
      <h2>Öğrenci Girişi</h2>
      <hr />
      <form @submit.prevent="Kaydet">
        <label for="txtOgrNo">Öğrenci Numarası</label> <br />
        <input type="number" name="txtOgrNo" v-model="OGRENCI.OGRENCINO" /><br /><br />
        <label for="txtAdSoyad">Ad Soyad</label> <br />
        <input
          type="text"
          name="txtAdSoyad"
          v-model="OGRENCI.ADSOYAD"
        /><br /><br />

        <button>Kaydet</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OGRENCI: {
        OGRENCINO: "",
        ADSOYAD: "",
      },
    };
  },
  methods: {
    Kaydet() {
      if(this.OGRENCI.OGRENCINO === '' && this.OGRENCI.ADSOYAD === ''){
          console.info("Değerlerde eksikler var");
      }
      else{
          try{
              this.$store.dispatch('storeOgrenci/OgrenciEkle', this.OGRENCI);
     
              this.OGRENCI.OGRENCINO = '';
              this.OGRENCI.ADSOYAD = '';
          }
          catch(hata){
            alert("hataaa");
              console.error(hata.message);
          }
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  padding: 10px;
  background-color: rgb(192, 214, 214);
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}

.row {
  max-width: 80%;
  margin-top: 2%;
  margin-left: 8%;
}
</style>