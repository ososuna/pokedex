<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-3">
    <h1>Pokedex</h1>
  </div>
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
