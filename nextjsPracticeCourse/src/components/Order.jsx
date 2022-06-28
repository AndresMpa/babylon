import React from 'react';
import Image from 'next/image';

import styles from '@styles/Order.module.scss';

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};

export default Order;
