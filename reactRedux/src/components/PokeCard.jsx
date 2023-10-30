import { useState } from "react";
import { useDispatch } from "react-redux";

import { setFavorite } from "../features/dataSlice";

import Meta from "antd/es/card/Meta";
import { Button, Card, Descriptions, Divider, Space } from "antd";
import {
  BookOutlined,
  SmallDashOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

import FavoriteButton from "./IconButton";

import "./../style/pokecard.css";

const PokeCard = ({
  pokemonData: { id, name, image, types, favorite, description, information },
}) => {
  const [pokemonDescription, setPokemonDescription] = useState(false);
  const [pokemonAbilities, setPokemonAbilities] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => dispatch(setFavorite({ pokemonId: id }));

  return (
    <Card
      title={name}
      cover={
        <img
          alt={name}
          src={image}
          extra={
            <FavoriteButton isFavorite={favorite} onFavorite={handleFavorite} />
          }
        />
      }
      extra={
        <FavoriteButton isFavorite={favorite} onFavorite={handleFavorite} />
      }
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
