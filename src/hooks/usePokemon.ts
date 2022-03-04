import pokeApi from '@/api/pokeApi';
import Pokemon from '../models/Pokemon';

const usePokemon = () => {

  const getPokemon = async( offset = 0, limit = 120 ) => {

    const { data } = await pokeApi.get('', {
      params: {
        limit,
        offset
      }
    });

    let index = offset+1;

    let pokemons: Pokemon[] = [];

    pokemons = data.results.map((result: { name: string; url: string; }): Pokemon => {
      return {
        id: index,
        name: result.name,
        url: result.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index++ }.png`
      }      
    });    

    return pokemons.filter( pokemon => pokemon.id < 899 );

  }

  return {
    getPokemon
  }

}

export default usePokemon
