const initialState = {
  pokemons: [],
};

const actionType = {
  setPokemon: "SET_POKEMON",
};

const reducerObject = (state, payload) => ({
  [actionType.setPokemon]: {
    ...state,
    pokemons: payload,
  },
});

const reducer = (state = initialState, action) =>
  reducerObject(state, action.payload)[action.type] || state;

export { actionType, reducer };
