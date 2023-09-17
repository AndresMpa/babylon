import React from 'react';

import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles.form}>
          <div>
            <label for="name" className={style.label}>
              Name
            </label>
            <input type="text" name="name" placeholder="Username" className={`${style.input} ${style['input-name']}`} />
            <label for="email" className={style.label}>
              Email
            </label>
            <input type="text" name="email" placeholder="platzi@example.com" className={`${style.input} ${style['input-email']}`} />
            <label for="password" className={style.label}>
              Password
            </label>
            <input type="password" name="password" placeholder="*********" className={`${style.input} ${style['input-password']}`} />
          </div>
          <input type="submit" value="Create" className={`${style['primary-button']} ${style['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
