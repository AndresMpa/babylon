import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getIn } from "immutable";

import { Col, Spin } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";
import { setPokemon, setLoading, getPokemonWithDetails } from "./actions";

const App = () => {
  const pokemons = useSelector(
    (state) => getIn(state, ["data", "pokemons"]),
    shallowEqual,
  ).toJS();
  const loading = useSelector((state) => getIn(state, ["ui", "loading"]));
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
