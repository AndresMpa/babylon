import { createContext, useState } from "react";

const ShopingCardContext = createContext();

const ShopingCardProvider = ({ children }) => {
  // Cart products
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping bag counter
  const [count, setCount] = useState(0);

  // Detail component
  const [showDetail, setShowDetail] = useState(false);
  const closeProductDetail = () => setShowDetail(false);
  const openProductDetail = () => setShowDetail(true);

  // Product detail information
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShopingCardContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        setCount,
        count,
        setProductToShow,
        productToShow,
        closeProductDetail,
        openProductDetail,
        showDetail,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
export { ShopingCardProvider, ShopingCardContext };
