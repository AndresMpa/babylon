import PokeCard from "./PokeCard";

import "./../style/pokedex.css";

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const createDescription = (pokemon) => {
  const stats = pokemon.stats.map((data, index) => {
    return {
      key: `${pokemon.name}-${index + 1}`,
      label: capitalize(data.stat.name.replaceAll("-", " ")),
      children: data.base_stat,
      span: index % 2 === 0 ? 2 : 1,
    };
  });

  return stats;
};

const createInformation = (pokemon) => {
  const abilities = pokemon.abilities.map((data) =>
    capitalize(data.ability.name.replaceAll("-", " ")),
  );

  const information = [
    {
      key: `${pokemon.name}-1`,
      children: pokemon.weight,
      label: "Weight",
      span: 2,
    },
    {
      key: `${pokemon.name}-2`,
      children: pokemon.height,
      label: "Height",
    },
    {
      key: `${pokemon.name}-3`,
      children: abilities.toString().replaceAll(",", ",\n"),
      label: "Abilities",
      span: 2,
    },
    {
      key: `${pokemon.name}-4`,
      children: pokemon.moves.length,
      label: "Moves",
    },
  ];

  return information;
};

const Pokedex = ({ pokemons }) => {
  let pokemonData;
  const pokeList = pokemons.map((pokemon, index) => {
    pokemonData = {
      id: pokemon.id,
      favorite: pokemon.favorite,
      name: capitalize(pokemon.name),
      types: pokemon.types.map((item) => `${capitalize(item.type.name)} `),
      image: pokemon.sprites.front_default,
      description: createDescription(pokemon),
      information: createInformation(pokemon),
    };

    return <PokeCard key={pokemon.name} pokemonData={pokemonData} />;
  });

  return <div className="pokedex">{pokeList}</div>;
};

export default Pokedex;
