<template>
  <the-nav-bar/>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheNavBar from './components/layout/TheNavBar.vue';

export default {
  data() {
    return {
      sayfaBilgileri: {
        baslik: "Web Uygulama ve Giliştirme Vize Sınavı",
      },
      bilgisayarBecerileri:[
        {teknoloji: 'ASP.NET Core', seviye: 50},
        {teknoloji: 'Java', seviye: 80},
        {teknoloji: 'Vue JS', seviye: 20},
      ]
    };
  },
  components: {
    TheNavBar
  },
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>