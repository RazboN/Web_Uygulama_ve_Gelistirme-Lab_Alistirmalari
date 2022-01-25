<template>
  <h3>
    Aşağıda bulunan formdaki "Kaydet" butonuna basıldığında <br />
    form kontrolü yapılmalıdır ve boş alan varsa sayfada uyarı görüntülenmeli
    <br />
    eğer alanlar doluysa sayfadaki değerler konsolda görüntülenmeli.
  </h3>
  <form @submit.prevent="BeceriEkle">
    <div class="form-control-txt">
      <label for="txtBeceri">Bilgisayar Beceriniz</label>
      <input
        id="txtBeceri"
        name="txtBeceri"
        type="text"
        v-model.trim="teknoloji"
      />
      <br />
      <label for="txtSeviye">Seviye</label>
      <input
        id="txtSeviye"
        name="txtSeviye"
        type="number"
        v-model.trim="seviye"
      />
      <p v-if="ValidasyonHata.hataVarMi">{{ ValidasyonHata.mesaj }}</p>
    </div>
    <button>Kaydet</button>
  </form>
</template>

<script>
export default {
  emits: ["beceri-ekle"],
  data() {
    return {
      teknoloji: "",
      seviye: 0,
      ValidasyonHata: {
        mesaj: "",
        hataVarMi: false,
      },
    };
  },
  methods: {
    async BeceriEkle() {
      if (this.teknoloji === "" || this.seviye === 0) {
        this.ValidasyonHata.hataVarMi = true;
        this.ValidasyonHata.mesaj = "Formda doldurulmayan alanlar var.";
      } else {
        const yeniTeknoloji = {
          teknoloji: this.teknoloji,
          seviye: this.seviye,
        };

          this.$emit("beceri-ekle", yeniTeknoloji);
          this.teknoloji = "";
          this.seviye = 0;
          this.ValidasyonHata.hataVarMi = false;

        
      }
    },
  },
};
</script>

<style scoped>
.form-control-txt {
  margin-top: 2rem;
  text-align: left;
  max-width: 100%;
}

form {
  margin: 2rem auto;
  max-width: 60%;
  padding: 2rem;
  background-color: #ffffff;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input {
  display: block;
  font: inherit;
  margin-top: 0.5rem;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  margin-top: 2rem;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>