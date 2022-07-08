import endPoints from '@services/api';
import axios from 'axios';

const addProduct = async (body) => {
  const config = {
    headers: {
      Accept: '*/*',
      'Content-Type': 'aplication/json',
    },
  };
  const response = await axios.post(endPoints.products.postProducts, body, config);

  return response.data;
};

export default addProduct;
