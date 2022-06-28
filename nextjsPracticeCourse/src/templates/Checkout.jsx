import React from 'react';

import OrderItem from '@components/OrderItem';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
	return (
		<div className={styles.Checkout}>
			<div className={styles["Checkout-container"]}>
				<h1 className={styles.title}>My order</h1>
				<div className={styles["Checkout-content"]}>
					<div className={styles.order}>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;
