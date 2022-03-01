<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <PokemonCardComponent
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :img="pokemon.img"
      />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

import PokemonCardComponent from '@/components/PokemonCardComponent.vue';
import usePokemon from '@/hooks/usePokemon';

export default defineComponent({
  name: 'PokemonCardsComponent',
  components: {
    PokemonCardComponent
  },
  setup() {

    const { getPokemon } = usePokemon();
    const pokemons = ref([]);

    const loadPokemons = async () => {
      pokemons.value = await getPokemon();
      console.log(pokemons.value);
    }

    loadPokemons();

    return {
      pokemons
    }
    
  }
});
</script>
