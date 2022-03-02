<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-4 mb-5">
    <h1>Pokedex</h1>
  </div>
  <PokemonCardsComponent :pokemons="pokemons" />
  <SpinnerComponent v-if="loadingPokemon" />
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardsComponent from '@/components/PokemonCardsComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

import usePokemon from '@/hooks/usePokemon';

import Pokemon from '../models/Pokemon';

export default defineComponent({
  name: 'PokedexLayout',  
  components: {
    NavbarComponent,
    PokemonCardsComponent,
    SpinnerComponent
  },
  setup() {

    const { getPokemon } = usePokemon();
    const loadingPokemon = ref(false);
    const pokemons = ref<Pokemon[]>([]);

    const loadPokemons = async () => {
      pokemons.value = await getPokemon();
    }
    
    const loadMorePokemon = async() => {
      window.addEventListener('scroll', async () => {
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement;

        if ( scrollTop + clientHeight >= scrollHeight - 1 ) {
          
          loadingPokemon.value = true;
          
          if ( loadingPokemon.value ) {
  
            const morePokemons = await getPokemon( pokemons.value.length );
            
            loadingPokemon.value = false;
            
            pokemons.value = [
              ...pokemons.value,
              ...morePokemons
            ]

            console.log('loaded');
            
          }
        }
      });
    }

    onMounted(() => {
      loadPokemons();
      loadMorePokemon();
    })

    return {
      loadingPokemon,
      pokemons
    }

  }
});

</script>
