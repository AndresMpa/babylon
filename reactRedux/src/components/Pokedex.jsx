import PokeCard from "./PokeCard";

import "./../style/pokedex.css";

const Pokedex = ({ pokemons }) => {
  const pokeList = pokemons.map((pokemon, index) => (
    <PokeCard
      key={pokemon.name}
      name={pokemon.name}
      image={pokemon.sprites.front_default}
    />
  ));

  return <div className="pokedex">{pokeList}</div>;
};

export default Pokedex;
