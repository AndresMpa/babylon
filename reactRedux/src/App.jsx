import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Col, Spin } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { fetchPokemonDetails } from "./features/dataSlice";

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails());
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
