import React, { useState, useContext, createContext } from 'react';

const PaginatorContext = createContext();

function useProvidePaginator() {
  const [current, setCurrent] = useState(1);

  const handleCurrent = (newCurrent, limit) => {
    if (newCurrent <= 0) {
      setCurrent(1);
    } else if (newCurrent > limit) {
      setCurrent(limit);
    } else {
      setCurrent(newCurrent);
    }
  };

  return {
    current,
    handleCurrent,
  };
}

export function ProvidePaginator({ children }) {
  const paginator = useProvidePaginator();
  return (
    <PaginatorContext.Provider value={paginator}>
      {children}
    </PaginatorContext.Provider>
  );
}

export const usePaginator = () => {
  return useContext(PaginatorContext);
};
