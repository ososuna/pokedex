
import pokeApi from '@/api/pokeApi';

const usePokemon = () => {
  
  const getPokemon = async() => {

    const { data } = await pokeApi.get('', {
      params: {
        limit: 100
      }
    });

    const pokemons = data.results.map((result: { name: string; url: string; }, index: number) => {
      return {
        name: result.name,
        url: result.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index + 1 }.png`
      }
    });

    return pokemons;
  
  }

  return {
    getPokemon
  }

}
export default usePokemon