import { useEffect, useState } from "react";
import axios from "axios";

const API = `http://localhost:3000/api/v1/`;

const useInitialState = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data.products);
      setCart(response.data.cart);
    };
    fetchData();
  }, []);

  return {
    products,
    cart,
  };
};

export default useInitialState;
