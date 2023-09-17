import Link from 'next/link';
import React from 'react';

import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li className={styles.title}>
          <Link href={'/'}>My orders</Link>
        </li>
        <li>
          <Link href={'/'}>My account</Link>
        </li>
        <li>
          <Link href={'/'}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
