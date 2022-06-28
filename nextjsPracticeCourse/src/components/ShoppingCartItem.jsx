import React from 'react';
import Image from 'next/image';

import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
  return (
    <div className={styles.ShoppingCartItem}>
      <figure>
        <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCartItem;
