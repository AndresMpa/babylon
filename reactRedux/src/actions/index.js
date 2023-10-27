import { getDetails } from '../api';
import { actionType } from '../reducers';

const setPokemon = (payload) => ({
  type: actionType.setPokemon,
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

export { setPokemon, getPokemonWithDetails };
