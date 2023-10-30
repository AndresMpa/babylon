import { getDetails } from '../api';
import { actionType } from './types';

const setPokemon = (payload) => ({
  type: actionType.setPokemon,
  payload,
});

const setLoading = (payload) => ({
  type: actionType.setLoading,
  payload,
});

const setFavorite = (payload) => ({
  type: actionType.setFavorite,
  payload,
});

const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getDetails(pokemon)),
    );

    dispatch(setPokemon(pokemonsDetailed));
  };

export { setPokemon, setFavorite, setLoading, getPokemonWithDetails };
