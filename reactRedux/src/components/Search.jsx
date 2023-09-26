import { Input } from "antd";

import "./../style/search.css";

const Search = () => {
  return (
    <div className="search">
      <Input.Search placeholder="Search" />
    </div>
  );
};

export default Search;
