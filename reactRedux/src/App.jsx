import { Col } from "antd";

import Search from "./components/Search";
import Pokedex from "./components/Pokedex";

const test = Array(10).fill({
  name: "Ditto",
  category: "Fire, Water",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
});

const App = () => {
  return (
    <>
      <Col span={12} offset={6}>
        <Search></Search>
      </Col>
      <Pokedex pokemons={test}></Pokedex>
    </>
  );
};

export default App;
