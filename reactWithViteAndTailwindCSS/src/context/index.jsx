import { createContext, useState } from "react";

const ShopingCardContext = createContext();

const ShopingCardProvider = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [count, setCount] = useState(0);

  const openProductDetail = () => setShowDetail(true);
  const closeProductDetail = () => setShowDetail(false);

  return (
    <ShopingCardContext.Provider
      value={{
        closeProductDetail,
        openProductDetail,
        showDetail,
        setCount,
        count,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
export { ShopingCardProvider, ShopingCardContext };
