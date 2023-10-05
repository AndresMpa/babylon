import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

const getPokemon = () =>
  axios
    .get(`${API}?limit=151&offset=0`)
    .then((res) => res.data.results)
    .catch((error) => console.log(error));

export { getPokemon };
