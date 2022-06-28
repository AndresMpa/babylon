import Link from 'next/link';
import React from 'react';

import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <Link href={'/'}>
          <li className={styles.title}>My orders</li>
        </Link>
        <Link href={'/'}>
          <li>My account</li>
        </Link>
        <Link href={'/'}>
          <li>Sign out</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
