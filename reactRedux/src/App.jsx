import { useEffect, useState } from "react";

import { Col } from "antd";

import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      setPokemon(pokemonList);
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Col span={12} offset={6}>
        <Search></Search>
      </Col>
      <Pokedex pokemons={pokemon}></Pokedex>
    </>
  );
};

export default App;
