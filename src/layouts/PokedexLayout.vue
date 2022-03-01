<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-3">
    <h1>Pokedex</h1>
  </div>
  <PokemonCardsComponent :pokemons="pokemons" />
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardsComponent from '@/components/PokemonCardsComponent.vue';
import usePokemon from '@/hooks/usePokemon';

export default defineComponent({
  name: 'PokedexLayout',  
  components: {
    NavbarComponent,
    PokemonCardsComponent
  },
  setup() {

    const { getPokemon } = usePokemon();
    const pokemons = ref([]);

    const loadPokemons = async () => {
      pokemons.value = await getPokemon();
    }

    loadPokemons();

    return {
      pokemons
    }
  
  }
});

</script>
