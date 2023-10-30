import { fromJS, setIn } from 'immutable';

import { markAsFavorite } from './mutations';

const initialState = fromJS({
  loading: false,
  pokemons: [],
});

const actionType = {
  setPokemon: 'SET_POKEMON',
  setLoading: 'SET_LOADING',
  setFavorite: 'SET_FAVORITE',
};

const reducerObject = (state, payload) => ({
  [actionType.setPokemon]: setIn(state, ['pokemons'], fromJS(payload)),
  [actionType.setLoading]: setIn(state, ['loading'], fromJS(payload)),
  [actionType.setFavorite]: setIn(
    state,
    ['pokemons'],
    fromJS(markAsFavorite(state, payload)),
  ),
});

const reducer = (state = initialState, action) =>
  reducerObject(state, action.payload)[action.type] || state;

export { actionType, reducer };
