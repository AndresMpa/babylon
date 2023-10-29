const markAsFavorite = (pokemonList, payload) => {
  const newPokemonList = [...pokemonList];
  const currentPokemonIndex = newPokemonList.findIndex(
    (pokemon) => pokemon.id === payload.pokemonId,
  );

  if (currentPokemonIndex < 0) {
    return pokemonList;
  } else {
    newPokemonList[currentPokemonIndex].favorite =
      !newPokemonList[currentPokemonIndex].favorite;

    return newPokemonList;
  }
};

export { markAsFavorite };
