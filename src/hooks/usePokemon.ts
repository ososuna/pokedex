
import pokeApi from '@/api/pokeApi';
import Pokemon from '../models/Pokemon';

const usePokemon = () => {
  
  const getPokemon = async( offset = 0 ) => {

    const { data } = await pokeApi.get('', {
      params: {
        limit: 120,
        offset
      }
    });

    let index = offset+1;

    return data.results.map((result: { name: string; url: string; }): Pokemon => {
      return {
        name: result.name,
        url: result.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index++ }.png`
      }
    });
  
  }

  return {
    getPokemon
  }

}
export default usePokemon