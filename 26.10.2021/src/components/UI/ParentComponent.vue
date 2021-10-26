<template>
  <div class="row">
    <div class="kolonEkle">
      <h1>Arkadaş Ekle</h1>
      <hr />
      <arkadas-ekle-comp @arkadas-ekle="ArkadasEkleme" />
    </div>
    <div class="kolonListele">
      <h1>Arkadaş Listele</h1>
      <hr />
      <arkadas-listele :arkadaslar="arkadasListesi" />
    </div>
  </div>
</template>

<script>
import ArkadasEkleComp from "../ArkadasEkle.vue";
import ArkadasListele from "../ArkadasListesi.vue";

export default {
  components: {
    ArkadasEkleComp,
    ArkadasListele,
  },
  data() {
    return {
      arkadasListesi: [
        {
          adSoyad: "Ali Cibir",
          yas: 36,
          neredenDuyuldu: "udemy",
          ilgiAlanlari: ["java", "vue"],
          cinsiyet: "bay",
        },
        {
          adSoyad: "Cem Cantekin",
          yas: 36,
          neredenDuyuldu: "google",
          ilgiAlanlari: ["vue"],
          cinsiyet: "bay",
        },
      ],
    };
  },
  methods: {
    ArkadasEkleme(paramYeniArk) {
      this.arkadasListesi.push(paramYeniArk);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  text-align: center;
}

.kolonEkle {
  float: left;
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: aquamarine;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.26);
  border: 4px solid black;
  /* overflow-y: scroll;
  max-height: 700px; */
}

.kolonListele {
  float: right;
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: cadetblue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: 4px solid black;
}

.row {
  height: 700px;
}
</style>