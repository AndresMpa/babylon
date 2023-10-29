import { useState } from "react";

import Meta from "antd/es/card/Meta";
import { Button, Card, Descriptions, Divider, Space } from "antd";
import {
  BookOutlined,
  HeartOutlined,
  SmallDashOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

import "./../style/pokecard.css";

const PokeCard = ({
  pokemonData: { name, image, types, description, information },
}) => {
  const [pokemonDescription, setPokemonDescription] = useState(false);
  const [pokemonAbilities, setPokemonAbilities] = useState(false);

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} extra={<HeartOutlined />} />}
      extra={<HeartOutlined />}
      actions={[
        <RadarChartOutlined
          key="description"
          onClick={() => {
            setPokemonDescription(true);
            setPokemonAbilities(false);
          }}
        />,
        <SmallDashOutlined
          key="show"
          onClick={() => {
            setPokemonDescription(false);
            setPokemonAbilities(false);
          }}
        />,
        <BookOutlined
          key="abilities"
          onClick={() => {
            setPokemonDescription(false);
            setPokemonAbilities(true);
          }}
        />,
      ]}
    >
      <Meta
        description={
          <div className="description">
            {types.map((type, index) => (
              <Button key={index} shape="round">
                {type}
              </Button>
            ))}
          </div>
        }
      ></Meta>
      {pokemonDescription && (
        <Descriptions
          className="centerExtraData"
          title={`${name}'s description`}
          items={description}
          layout="vertical"
        />
      )}
      {pokemonAbilities && (
        <Descriptions
          className="centerExtraData"
          title={`${name}'s information`}
          items={information}
          layout="vertical"
        />
      )}
    </Card>
  );
};

export default PokeCard;
