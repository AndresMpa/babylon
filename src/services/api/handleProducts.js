import endPoints from '@services/api';
import axios from 'axios';

export const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    endPoints.products.postProducts,
    body,
    config
  );

  return response.data;
};
