<template>
  <Navbar />
  <h1>Pokedex Layout</h1>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'PokedexLayout',
  components: {
    Navbar
  }
});

</script>
