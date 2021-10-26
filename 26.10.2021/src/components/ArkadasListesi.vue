<template>
  <div class="ulClass">
    <div 
        v-for="arkadas in arkadaslar" 
        :key="arkadas.adSoyad"
        class="liClass">
        <p><b> Ad Soyad:</b> {{ arkadas.adSoyad }}</p>    
        <p>Yaş: {{ arkadas.yas }}</p> 
        <p>Cinsiyet: {{ arkadas.cinsiyet }}</p> 
        <p>Nereden duyuldu: {{ arkadas.neredenDuyuldu }}</p> 
        <p><b>İlgi alanları:</b></p>
        <p 
            v-for="ilgiAlani in arkadas.ilgiAlanlari"
            :key="ilgiAlani"> {{ ilgiAlani }}
        </p> 
           
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arkadaslar: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
input {
  width: 70%;
}

.gencYas {
  background-color: green;
}

.ortaYas {
  background-color: lightgreen;
}

.yasli {
  background-color: grey;
}

.menu {
  width: 100%;
}

.ulClass {
  margin: 2rem auto;
  max-width: 90%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
  overflow-y: auto;
  max-height: 550px;
}

.liClass {
  list-style: none;
  max-width: 70%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #8ddba4;
  margin-bottom: 1rem;
  margin-left: 15%;
}

.liClass p {
  text-align: inherit;
}

button {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}
</style>