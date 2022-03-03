import { ref } from 'vue';

import pokeApi from '@/api/pokeApi';
import Pokemon from '../models/Pokemon';

const usePokemon = () => {
  
  const allPokemonsLoaded = ref(false);

  const getPokemon = async( offset = 0 ) => {

    const { data } = await pokeApi.get('', {
      params: {
        limit: 120,
        offset
      }
    });

    let index = offset+1;

    let pokemons: Pokemon[] = [];

    pokemons = data.results.map((result: { name: string; url: string; }): Pokemon => {
      return {
        id: index++,
        name: result.name,
        url: result.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index++ }.png`
      }      
    });

    if ( index > 899 ) {
      allPokemonsLoaded.value = true;
    }
  
    return pokemons.filter( pokemon => pokemon.id < 899 );

  }

  return {
    allPokemonsLoaded,
    getPokemon
  }

}

export default usePokemon
