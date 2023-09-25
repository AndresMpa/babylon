import { createContext } from "react";

const ShopingCardContext = createContext();

const ShopingCardProvider = ({ children }) => (
  <ShopingCardContext.Provider>{children}</ShopingCardContext.Provider>
);

export default ShopingCardProvider;
