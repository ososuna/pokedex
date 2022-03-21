<template>      
  <PokemonCard
    v-for="pokemon in pokemons"
    :key="pokemon.name"
    :name="pokemon.name"
    :img="pokemon.img"
    @click="pokemonInfo( pokemon.id )"
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import PokemonCard from '@/components/PokemonCard.vue';

export default defineComponent({
  name: 'PokemonCards',
  props: {
    pokemons: Array
  },
  components: {
    PokemonCard
  },
  setup() {

    const router = useRouter();

    const pokemonInfo = ( id: number ) => {
      router.push({ name: 'PokemonInfoView', params: { id }})
    }

    return {
      pokemonInfo
    }
  }
});
</script>
