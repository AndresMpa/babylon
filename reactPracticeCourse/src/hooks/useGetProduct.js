import { useState, useEffect } from "react";
import axios from "axios";

const useGetProduct = (API) => {
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProduct(response.data);
  }, []);

  return product;
};

export default useGetProduct;
