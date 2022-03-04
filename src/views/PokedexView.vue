<template>
  <NavbarComponent title="Vue Pokedex" />
  
  <div class="container mt-4 mb-5">
    <img
      src="https://fontmeme.com/permalink/220303/53e6f4184809d9dbe6e98062a0948a4e.png"
      alt="vue-pokedex"
      style="width:20rem"
    />
  </div>

  <div class="container"> 
    <div class="row d-flex justify-content-center">
      <SearchBarComponent
        @searchPokemon="searchPokemon($event)"
      />
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <PokemonCardsComponent
        v-if="searchingPokemon"
        :pokemons="resultPokemon"
      />
      <PokemonCardsComponent
        v-else
        :pokemons="pokemons"
      />
    </div>
  </div>

  <SpinnerComponent v-if="loadingPokemon" />
  
  <FooterComponent v-if="allPokemonsLoaded" />

</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';

import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardsComponent from '@/components/PokemonCardsComponent.vue';
import SearchBarComponent from '@/components/SearchBarComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

import usePokemon from '@/hooks/usePokemon';

import Pokemon from '@/models/Pokemon';

export default defineComponent({
  name: 'PokedexView',  
  components: {
    NavbarComponent,
    PokemonCardsComponent,
    SpinnerComponent,
    FooterComponent,
    SearchBarComponent
  },
  setup() {

    const { getPokemon } = usePokemon();

    const allPokemonsLoaded = ref(false);
    const loadingPokemon    = ref(false);
    const searchingPokemon  = ref(false);

    const allPokemons       = ref<Pokemon[]>([]);
    const pokemons          = ref<Pokemon[]>([]);
    const resultPokemon     = ref<Pokemon[]>([]);

    const handleScroll = () => {
      window.onscroll = async () => {
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement;
        if ( (scrollTop + clientHeight >= scrollHeight - 1) && !allPokemonsLoaded.value ) {
          loadMorePokemon();
        }
      }
    }
    
    const loadPokemons = async () => {
      pokemons.value = await getPokemon();
    }

    const loadMorePokemon = async() => {

      if ( !loadingPokemon.value ) {
        loadingPokemon.value = true;
        const morePokemons = await getPokemon( pokemons.value.length );

        pokemons.value = [
          ...pokemons.value,
          ...morePokemons
        ]

        if ( pokemons.value.length > 897 ) allPokemonsLoaded.value = true;
        loadingPokemon.value = false;
      }
    
    }

    const searchPokemon = async( $event: Event ) => {

      if ( ($event.target as HTMLInputElement).value != '' ) {

        loadingPokemon.value = true;
        searchingPokemon.value = true;

        allPokemons.value = await getPokemon(0, 900);

        loadingPokemon.value = false;
        
        resultPokemon.value = allPokemons.value.filter( pokemon => 
          pokemon.name.includes( ($event.target as HTMLInputElement).value )
        );
      } else {
        searchingPokemon.value = false;
      }
    }

    onMounted(() => {
      loadPokemons();
      handleScroll();
    });

    return {
      allPokemonsLoaded,
      loadingPokemon,
      pokemons,
      resultPokemon,
      searchingPokemon,
      searchPokemon
    }

  }
});

</script>
