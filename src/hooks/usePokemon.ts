
import pokeApi from '@/api/pokeApi';

const usePokemon = () => {
  
  const getPokemon = async() => {

    const { data } = await pokeApi.get('', {
      params: {
        limit: 100
      }
    });

    return data.results;
  
  }

  return {
    getPokemon
  }

}
export default usePokemon