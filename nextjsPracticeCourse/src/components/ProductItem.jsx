import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '../context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} />
      <div className={style['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
