import { getIn, setIn } from 'immutable';

const markAsFavorite = (state, payload) => {
  const currentIndex = state
    .get('pokemons')
    .findIndex((pokemon) => pokemon.get('id') === payload.pokemonId);

  if (currentIndex < 0) {
    return state;
  } else {
    const isFavorite = getIn(state, ['pokemons', currentIndex, 'favorite']);
    const newList = setIn(
      state,
      ['pokemons', currentIndex, 'favorite'],
      !isFavorite,
    );

    return newList.get('pokemons');
  }
};

export { markAsFavorite };
