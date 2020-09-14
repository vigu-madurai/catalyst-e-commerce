import React from 'react';
import './index.css';

function Pod(props) {
	const { products } = props;

	const renderPod = () => {
		return products.map((el, index) => {
			return (
				<a
					href={`/shop/category/product/${el.productId}`}
					className='pod-inner-wrapper'
					key={`pod-${index}`}
					target='_blank'
				>
					<div className='pod-img-wrapper'>
						<img src={el.images[0]} className='' alt='product-image' />
					</div>
					<div className='pod-desc-wrapper'>{el.title}</div>
					<div className='pod-price-wrapper'>&#8377; {el.price.total}</div>
					<div className='pod-details-wrapper'>
						<span>
							Making Charges: {el.price.makingCharges} | Wastage Charges: {el.price.makingCharges} | Weight:{' '}
							{el.price.weight}gms | Total Discount: {el.price.discountPercentage}%
						</span>
					</div>
					<div className='pod-sale-wrapper'>
						<span className='pod-sale-offer-name'>{el.offers.name}</span>
						<span className='pod-sale-discount'>{el.offers.discountPercentage}% off</span>
					</div>
				</a>
			);
		});
	};
	return <div className='pod-outer-wrapper'>{renderPod()}</div>;
}
export default Pod;
