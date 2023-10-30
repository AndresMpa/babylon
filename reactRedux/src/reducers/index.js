import { combineReducers } from 'redux-immutable';

import { pokemonReducer } from './pokemons';
import { uiReducer } from './ui';

const appReducer = combineReducers({
  data: pokemonReducer,
  ui: uiReducer,
});

export { appReducer };
