<template>
  <div class="home">
    <AnaSayfa/>
  </div>
</template>

<script>
// @ is an alias to /src
import AnaSayfa from '@/components/Cmp_AnaSayfa'

export default {
  name: 'Home',
  components: {
    AnaSayfa
  }
}
</script>
