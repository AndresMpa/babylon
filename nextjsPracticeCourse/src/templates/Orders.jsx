import React from 'react';

import OrderItem from '@components/OrderItem';

import styles from '@styles/Orders.module.scss';

const Orders = () => {
	return (
		<div className={styles.Orders}>
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					<OrderItem />
				</div>
			</div>
		</div>
	);
}

export default Orders;
