import React from 'react';

import useGetProducts from '@hooks/useGetProducts';

import ProductItem from '@components/ProductItem';

import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
  const products = useGetProducts();

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          if (product.images[0]) {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
