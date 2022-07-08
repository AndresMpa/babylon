import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import axios from 'axios';

import FormProduct from '@components/FormProduct';
import NotFound from '@common/NotFound';

export default function Edit() {
  const [notFound, setNotFound] = useState(false);
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getProduct(id));
        setProduct(response.data);
      } catch (error) {
        setNotFound(true);
      }
    }

    if (router.isReady) {
      getProduct();
    }
  }, [router?.isReady]);

  return <>{notFound ? <NotFound /> : <FormProduct product={product} />}</>;
}
