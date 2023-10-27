import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Spin } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";
import { setPokemon, setLoading, getPokemonWithDetails } from "./actions";

const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonList = await getPokemon();

      dispatch(getPokemonWithDetails(pokemonList));
      dispatch(setLoading(false));
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Col span={12} offset={6}>
        <Search></Search>
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large"></Spin>
        </Col>
      ) : (
        <Pokedex pokemons={pokemons}></Pokedex>
      )}
    </>
  );
};

export default App;
