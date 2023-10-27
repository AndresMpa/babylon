import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

import "./../style/pokecard.css";

const PokeCard = ({ name, image }) => {
  return (
    <div className="pokecard">
      <Card
        title={name}
        cover={<img src={image} alt={name} extra={<StarOutlined />} />}
        extra={<StarOutlined />}
      >
        <Meta description={name}></Meta>
      </Card>
    </div>
  );
};

export default PokeCard;
