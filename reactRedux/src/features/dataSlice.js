import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPokemonWithDetails } from '../actions';
import { getDetails, getPokemon } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
};

const fetchPokemonDetails = createAsyncThunk(
  'data/fetchPokemonDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonList = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonList.map((pokemon) => getDetails(pokemon)),
    );
    console.log(pokemonsDetailed)

    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },

    setFavorite: (state, action) => {
      const currentIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId,
      );

      if (currentIndex >= 0) {
        const isFavorite = state.pokemons[currentIndex].favorite;

        state.pokemons[currentIndex].favorite = !isFavorite;
      }
    },
  },
});

const { setPokemons, setFavorite } = dataSlice.actions;

export { fetchPokemonDetails, dataSlice, setPokemons, setFavorite };

export default dataSlice.reducer;
