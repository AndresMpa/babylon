import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";
import { getPokemonWithDetails, setPokemon } from "./actions";

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonList));
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Col span={12} offset={6}>
        <Search></Search>
      </Col>
      <Pokedex pokemons={pokemons}></Pokedex>
    </>
  );
};

export default App;
