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
    
    const loadMorePokemon = () => {
      
      window.onscroll = async () => {
        
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement;

        if ( scrollTop + clientHeight >= scrollHeight - 1 ) {
          
          if ( !loadingPokemon.value ) {
            
            loadingPokemon.value = true;

            const morePokemons = await getPokemon( pokemons.value.length );
            
            pokemons.value = [
              ...pokemons.value,
              ...morePokemons
            ]
            
            loadingPokemon.value = false;            
          }
        }
      };
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
