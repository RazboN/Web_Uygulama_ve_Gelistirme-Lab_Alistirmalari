<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="txtAdSoyad">Ad Soyad</label>
      <input
        id="txtAdSoyad"
        name="txtAdSoyad"
        type="text"
        v-model.trim="adSoyad"
      />
    </div>
    <div class="form-control">
      <label for="txtYas">Yasşınız</label>
      <input id="txtYas" name="txtYas" type="number" v-model.trim="yas" />
    </div>

    <div class="form-control">
      <label for="slOneren">Nereden Duydunuz?</label>
      <select name="slOneren" id="slOneren" v-model="neredenDuyuldu">
        <option value="google">Google</option>
        <option value="maltepe_web">Maltepe Üniversitesi</option>
        <option value="udemy">Udemy</option>
      </select>
    </div>

    <div class="form-control">
      <h2>İlgi alanlarınız neler?</h2>
      <div>
        <input
          id="ilgi-C#"
          name="ilgiAlani"
          type="checkbox"
          value="c#"
          v-model="ilgiAlanlari"
        />
        <label for="ilgi-C#">C#</label>
      </div>
      <div>
        <input
          id="ilgi-Java"
          name="ilgiAlani"
          type="checkbox"
          value="java"
          v-model="ilgiAlanlari"
        />
        <label for="ilgi-Java">Java</label>
      </div>
      <div>
        <input
          id="ilgi-Vue"
          name="ilgiAlani"
          type="checkbox"
          value="vue"
          v-model="ilgiAlanlari"
        />
        <label for="ilgi-Vue">Vue</label>
      </div>

      <div class="form-control">
        <h2>Cinsiyetiniz</h2>
        <div>
          <input
            id="cnsBayan"
            name="bayan"
            type="radio"
            value="bayan"
            v-model="cinsiyet"
          />
          <label for="cnsBayan">Bayan</label>
        </div>
        <div>
          <input
            id="cnsBay"
            name="bay"
            type="radio"
            value="bay"
            v-model="cinsiyet"
          />
          <label for="cnsBay">Bay</label>
        </div>
        <div>
          <input
            id="cnsDiger"
            name="diger"
            type="radio"
            value="diger"
            v-model="cinsiyet"
          />
          <label for="cnsDiger">Diğer</label>
        </div>
        <br>
        <div>
            <button>Kaydet</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      adSoyad: "",
      yas: null,
      neredenDuyuldu: "",
      ilgiAlanlari: [],
      cinsiyet: null,
    };
  },
  methods:{
      submitForm(){
        //   alert('Metod tetiklendi');
        //   console.log(this.adSoyad);
        //   console.log(this.yas);
        //   console.log(this.neredenDuyuldu);
        //   console.log(this.ilgiAlanlari);
        //   console.log(this.cinsiyet);

        const yeniArkadas = {
            adSoyad: this.adSoyad,
            yas: this.yas,
            neredenDuyuldu: this.neredenDuyuldu,
            ilgiAlanlari: this.ilgiAlanlari,
            cinsiyet: this.cinsiyet
        };

        this.$emit("arkadas-ekle", yeniArkadas);
      }
  },
};
</script>

<style scoped>
form {
  max-width: 70%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
  margin-left: 15%;
  margin-top: 5%;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>