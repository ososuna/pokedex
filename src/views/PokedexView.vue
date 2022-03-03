<template>
  <NavbarComponent title="Vue Pokedex" />
  <div class="container mt-4 mb-5">
    <img src="https://fontmeme.com/permalink/220303/53e6f4184809d9dbe6e98062a0948a4e.png" alt="vue-pokedex" style="width:20rem" />
  </div>
  <PokemonCardsComponent :pokemons="pokemons" />
  <SpinnerComponent v-if="loadingPokemon" />
  <FooterComponent v-if="allPokemonsLoaded" />
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardsComponent from '@/components/PokemonCardsComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import usePokemon from '@/hooks/usePokemon';

import Pokemon from '@/models/Pokemon';

export default defineComponent({
  name: 'PokedexView',  
  components: {
    NavbarComponent,
    PokemonCardsComponent,
    SpinnerComponent,
    FooterComponent
  },
  setup() {

    const { allPokemonsLoaded, getPokemon } = usePokemon();

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

        if ( (scrollTop + clientHeight >= scrollHeight - 1) && !allPokemonsLoaded.value ) {
          
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
      }
    }

    onMounted(() => {
      loadPokemons();
      loadMorePokemon();
    })

    return {
      allPokemonsLoaded,
      loadingPokemon,
      pokemons
    }

  }
});

</script>
