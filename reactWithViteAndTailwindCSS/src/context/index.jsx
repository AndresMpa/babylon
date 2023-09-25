import { createContext, useState } from "react";

const ShopingCardContext = createContext();

const ShopingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShopingCardContext.Provider
      value={{
        setCount,
        count,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
export { ShopingCardProvider, ShopingCardContext };
