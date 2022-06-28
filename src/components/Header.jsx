import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';

import Menu from '@components/Menu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.header}>
      <Image className={styles.menu} layout="intrinsic" alt="menu" src={menu} />
      <div className={styles['navbar-left']}>
        <Link href={'/'}>
          <Image
            className={styles['nav-logo']}
            layout="intrinsic"
            src={logo}
            alt="logo"
          />
        </Link>
        <ul>
          <Link href={'/'}>
            <li>All</li>
          </Link>
          <Link href={'/'}>
            <li>Clothes</li>
          </Link>
          <Link href={'/'}>
            <li>Electronics</li>
          </Link>
          <Link href={'/'}>
            <li>Furnitures</li>
          </Link>
          <Link href={'/'}>
            <li>Toys</li>
          </Link>
          <Link href={'/'}>
            <li>Others</li>
          </Link>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <Image alt="Shopping cart" src={shoppingCart} />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
