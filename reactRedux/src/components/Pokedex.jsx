import PokeCard from "./PokeCard";

import "./../style/pokedex.css";

const Pokedex = ({ pokemons }) => {
  const pokeList = pokemons.map((pokemon, index) => (
    <PokeCard key={index} pokemonInfo={pokemon} />
  ));

  return <div className="pokedex">{pokeList}</div>;
};

export default Pokedex;
