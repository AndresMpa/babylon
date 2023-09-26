import { createContext, useEffect, useState } from "react";

const ShopingCardContext = createContext();

const ShopingCardProvider = ({ children }) => {
  // To fetch products
  const URL = "https://api.escuelajs.co/api/v1/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((rawResponse) => rawResponse.json())
      .then((response) => setProducts(response));
  }, []);

  // Search value
  const [searchValue, setSearchValue] = useState("");

  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter narrow
  const [narrow, setNarrow] = useState("");

  const filterByTitle = (items, searchNarrow) =>
    items?.filter((item) =>
      item.title.toLowerCase().includes(searchNarrow.toLowerCase()),
    );

  const filterByCategory = (items, category) =>
    items?.filter(
      (item) => item.category.name.toLowerCase() === category.toLowerCase(),
    );

  useEffect(() => {
    if (searchValue && narrow) {
      setFilteredProducts(filterByCategory(products, narrow));
      setFilteredProducts(filterByTitle(filteredProducts, searchValue));
    } else if (searchValue) {
      setFilteredProducts(filterByTitle(products, searchValue));
    } else if (narrow) {
      setFilteredProducts(filterByCategory(products, narrow));
    }
  }, [products, filteredProducts, narrow, searchValue]);

  // Cart products
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout component
  const [showCheckoutMenu, setShowCheckoutMenu] = useState(false);
  const closeShowCheckoutMenu = () => setShowCheckoutMenu(false);
  const openShowCheckoutMenu = () => setShowCheckoutMenu(true);

  // Detail component
  const [showDetail, setShowDetail] = useState(false);
  const closeProductDetail = () => setShowDetail(false);
  const openProductDetail = () => setShowDetail(true);

  // Product detail information
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart order
  const [order, setOrder] = useState([]);

  return (
    <ShopingCardContext.Provider
      value={{
        products,
        setProducts,
        searchValue,
        setSearchValue,
        filteredProducts,
        setNarrow,
        narrow,
        cartProducts,
        setCartProducts,
        closeShowCheckoutMenu,
        openShowCheckoutMenu,
        showCheckoutMenu,
        setProductToShow,
        productToShow,
        closeProductDetail,
        openProductDetail,
        showDetail,
        order,
        setOrder,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
export { ShopingCardProvider, ShopingCardContext };
