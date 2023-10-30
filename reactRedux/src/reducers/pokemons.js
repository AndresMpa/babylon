import { fromJS, setIn } from 'immutable';

import { actionType } from '../actions/types';

import { markAsFavorite } from './mutations';

const initialState = fromJS({
  pokemons: [],
});

const pokemonReducerObject = (state, payload) => ({
  [actionType.setPokemon]: setIn(state, ['pokemons'], fromJS(payload)),
  [actionType.setFavorite]: setIn(
    state,
    ['pokemons'],
    fromJS(markAsFavorite(state, payload)),
  ),
});

const pokemonReducer = (state = initialState, action) =>
  pokemonReducerObject(state, action.payload)[action.type] || state;

export { pokemonReducer };
