import axios from 'axios'

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default pokeApi
