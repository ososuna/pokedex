<template>
  <NavbarComponent />
  <h1>Pokedex Layout</h1>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default defineComponent({
  name: 'PokedexLayout',  
  components: {
    NavbarComponent
  }
});

</script>
