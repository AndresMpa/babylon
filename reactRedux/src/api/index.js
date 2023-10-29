import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

const getPokemon = () =>
  axios
    .get(`${API}?limit=11&offset=0`) // Must be 151
    .then((res) => res.data.results)
    .catch((error) => console.log(error));

const getDetails = (pokemon) =>
  axios
    .get(pokemon.url)
    .then((res) => {
      return {
        ...res.data,
        favorite: false,
      };
    })
    .catch((error) => console.log(error));

export { getPokemon, getDetails };
