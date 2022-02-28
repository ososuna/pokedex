<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-3">
    <h1>Pokedex</h1>
  </div>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <PokemonCardComponent
        name="Oshawott"
        img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"  
      />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardComponent from '@/components/PokemonCardComponent.vue';

export default defineComponent({
  name: 'PokedexLayout',  
  components: {
    NavbarComponent,
    PokemonCardComponent
  }
});

</script>
