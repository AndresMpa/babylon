import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";
import { setPokemon } from "./actions";

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      dispatch(setPokemon(pokemonList));
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
