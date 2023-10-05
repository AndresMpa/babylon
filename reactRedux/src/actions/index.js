import { actionType } from '../reducers';

const setPokemon = (payload) => ({
  type: actionType.setPokemon,
  payload,
});

export { setPokemon };
