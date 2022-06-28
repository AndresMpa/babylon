import React from 'react';
import Image from 'next/image';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles['form-container']}>
        <Image
          src={logo}
          alt="logo"
          layout="intrinsic"
          className={styles.logo}
        />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className={styles['email-image']}>
          <Image src={email} alt="email" layout="intrinsic" />
        </div>
        <button
          className={`${styles['primary-button']} ${styles['login-button']}`}
        >
          Login
        </button>
        <p className={styles.resend}>
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
