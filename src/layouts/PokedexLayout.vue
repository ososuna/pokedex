<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-4 mb-5">
    <h1>Pokedex</h1>
  </div>
  <PokemonCardsComponent :pokemons="pokemons" />
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';

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
    
    const loadMorePokemon = () => {
      window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if ( scrollTop + clientHeight >= scrollHeight - 5 ) {
          console.log('Loading more...');
        }
      });
    }

    onMounted(() => {
      loadPokemons();
      loadMorePokemon();
    })

    return {
      pokemons
    }

  }
});

</script>
