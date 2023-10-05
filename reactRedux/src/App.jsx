import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Col } from "antd";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

import { getPokemon } from "./api";
import { setPokemon as setPokemonAction } from "./actions";

// Redux mappers
const mapState = (state) => ({ pokemons: state.pokemons });
const mapDispatch = { setPokemons: (value) => setPokemonAction(value) };
const connector = connect(mapState, mapDispatch);

const App = ({ pokemons, setPokemons }) => {
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      setPokemons(pokemonList);
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

export default connector(App);
