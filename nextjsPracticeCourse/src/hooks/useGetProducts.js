import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = () => {
  const API = process.env.NEXT_PUBLIC_API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };

    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
