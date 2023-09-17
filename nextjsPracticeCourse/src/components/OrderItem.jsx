import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '../context/AppContext';

import close from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleOnError = () => {
    console.log(product);
    setImgSrc(close);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        {product && (
          <Image
            onError={handleOnError}
            src={product?.images[0]}
            alt={product?.title}
            layout="responsive"
            height={35}
            width={35}
          />
        )}
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image
        className={(styles.pointer, styles['more-clickable-area'])}
        onClick={() => handleRemove(product)}
        src={close}
        alt="close"
      />
    </div>
  );
};

export default OrderItem;
