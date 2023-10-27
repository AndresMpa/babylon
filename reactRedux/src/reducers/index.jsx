const initialState = {
  loading: false,
  pokemons: [],
};

const actionType = {
  setPokemon: "SET_POKEMON",
  setLoading: "SET_LOADING",
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
});

const reducer = (state = initialState, action) =>
  reducerObject(state, action.payload)[action.type] || state;

export { actionType, reducer };
