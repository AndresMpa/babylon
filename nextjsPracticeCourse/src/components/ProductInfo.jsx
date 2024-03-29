import React from 'react';
import Image from 'next/image';

import addToCart from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        layout="responsive"
        height="100%"
        width="100%"
        alt="bike"
      />
      <div className={styles.ProductInfo}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button
          className={`${style['primary-button']} ${style['add-to-cart-button']}`}
        >
          <Image layout="intrinsic" alt="Add to cart" src={addToCart} />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
