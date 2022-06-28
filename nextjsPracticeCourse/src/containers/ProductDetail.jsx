import React from 'react';

import ProductInfo from '@components/ProductInfo';

import close from '@icons/icon_close.png'

import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
