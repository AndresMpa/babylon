import React from 'react';

import '../../styles/TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const paramValue = searchParam.get('search');

  if (paramValue) {
    setSearchValue(paramValue);
  }

  const onSearchValueChange = ({ target: { value } }) => {
    setSearchValue(value);
    setSearchParam({ search: value });
  };

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
      value={paramValue}
      disabled={loading}
    />
  );
}

export { TodoSearch };
