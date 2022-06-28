import React, { useContext } from 'react';

import AppContext from '@context/AppContext';

import Head from 'next/head';

import OrderItem from '@components/OrderItem';

import { getDate, sumTotal } from '@util/cart';

import styles from '@styles/Checkout.module.scss';


const Checkout = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>{ getDate() }</span>
                <span>Item on cart: { state.cart.length }</span>
              </p>
              <p>Total: $ {sumTotal(state.cart)}</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
