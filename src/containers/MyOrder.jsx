import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import arrow from '@icons/flechita.svg';

import { sumTotal } from "@util/cart.js"

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
      <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal(state.cart)}</p>
      </div>
      <Link href={'/checkout'}>
        <button className={styles['primary-button']}>Checkout</button>
      </Link>
    </aside>
  );
};

export default MyOrder;
