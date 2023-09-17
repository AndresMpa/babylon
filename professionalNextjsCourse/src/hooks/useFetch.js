import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(endpoint);
      setData(response.data);
    }
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
