import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";

const FavoriteButton = ({ isFavorite, onFavorite }) => {
  const red = "#eb2f96";
  const icon = isFavorite ? (
    <HeartFilled style={{ color: red }} />
  ) : (
    <HeartOutlined style={{ color: red }} />
  );

  return <Button icon={icon} onClick={onFavorite}></Button>;
};

export default FavoriteButton;
