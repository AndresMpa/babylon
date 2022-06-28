import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className={styles.ProductItem}>
      <Image
        src={product?.images[0]}
        alt={product?.title}
        layout="responsive"
        height="100%"
        width="100%"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => addToCart(product)}>
          <Image src={addToCartImage} layout="intrinsic" alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
