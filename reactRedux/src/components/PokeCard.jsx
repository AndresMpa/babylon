import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

import "./../style/pokecard.css";

const pokeImage = (pokemonIndex) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

const PokeCard = ({ pokemonInfo: { name, url } }) => {
  const index = url.split("/")[6].split(".")[0];
  const pokemonUrl = pokeImage(index);

  return (
    <div className="pokecard">
      <Card
        title={name}
        cover={<img src={pokemonUrl} alt={name} extra={<StarOutlined />} />}
        extra={<StarOutlined />}
      >
        <Meta description={name}></Meta>
      </Card>
    </div>
  );
};

export default PokeCard;
