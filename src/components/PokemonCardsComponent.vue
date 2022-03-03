<template>      
  <PokemonCardComponent
    v-for="pokemon in pokemons"
    :key="pokemon.name"
    :name="pokemon.name"
    :img="pokemon.img"
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import PokemonCardComponent from '@/components/PokemonCardComponent.vue';

export default defineComponent({
  name: 'PokemonCardsComponent',
  props: {
    pokemons: Array
  },
  components: {
    PokemonCardComponent
  }
});
</script>
