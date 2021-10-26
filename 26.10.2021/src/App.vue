<template>
    <parent-comp/>
</template>

<script>
import ParentComp from "./components/UI/ParentComponent.vue";

export default {
  components: {
    ParentComp,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 2rem auto;
  max-width: 90%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
  border: 10px solid black;
}
</style>