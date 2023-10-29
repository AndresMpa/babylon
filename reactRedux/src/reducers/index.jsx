import { markAsFavorite } from "./mutations";

const initialState = {
  loading: false,
  pokemons: [],
};

const actionType = {
  setPokemon: "SET_POKEMON",
  setLoading: "SET_LOADING",
  setFavorite: "SET_FAVORITE",
};

const reducerObject = (state, payload) => ({
  [actionType.setPokemon]: {
    ...state,
    pokemons: payload,
  },
  [actionType.setLoading]: {
    ...state,
    loading: payload,
  },
  [actionType.setFavorite]: {
    ...state,
    pokemons: markAsFavorite(state.pokemons, payload),
  },
});

const reducer = (state = initialState, action) =>
  reducerObject(state, action.payload)[action.type] || state;

export { actionType, reducer };
