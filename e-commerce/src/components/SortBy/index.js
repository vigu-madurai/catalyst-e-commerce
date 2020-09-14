import React, { useState } from 'react';
import './index.css';

function SortBy(props) {
	const { input, setProductsValues } = props;
	const [activeSorted, setActiveSorted] = useState('');

	const priceSort = (order) => {
		let data = input;
		function compare(a, b) {
			const bandA = a.price.total;
			const bandB = b.price.total;

			let comparison = 0;
			if (bandA > bandB) {
				comparison = 1;
			} else if (bandA < bandB) {
				comparison = -1;
			}
			return order ? comparison * -1 : comparison;
		}
		setActiveSorted(order ? 'price-high' : 'price-low');
		data.sort(compare);
		setProductsValues(data);
	};

	const wastageSort = () => {
		let data = input;
		function compare(a, b) {
			const bandA = a.price.wastage;
			const bandB = b.price.wastage;

			let comparison = 0;
			if (bandA > bandB) {
				comparison = 1;
			} else if (bandA < bandB) {
				comparison = -1;
			}
			return comparison;
		}
		setActiveSorted('low-wastage');
		data.sort(compare);
		setProductsValues(data);
    };
    
    const makingChargesSort = () => {
		let data = input;
		function compare(a, b) {
			const bandA = a.price.makingCharges;
			const bandB = b.price.makingCharges;

			let comparison = 0;
			if (bandA > bandB) {
				comparison = 1;
			} else if (bandA < bandB) {
				comparison = -1;
			}
			return comparison;
		}
		setActiveSorted('low-makingCharges');
		data.sort(compare);
		setProductsValues(data);
	};

	return (
		<div>
			<div className='sortby-wrapper'>
				SortBy:
				<div
					className={`sortby-option ${activeSorted == 'price-low' ? 'sortby-selected' : ''}`}
					onClick={() => {
						if (input) {
							priceSort();
						}
					}}
				>
					Price Low
				</div>
				<span>|</span>
				<div
					className={`sortby-option ${activeSorted == 'price-high' ? 'sortby-selected' : ''}`}
					onClick={() => {
						if (input) {
							priceSort(1);
						}
					}}
				>
					Price High
				</div>
				<span>|</span>
				<div
					className={`sortby-option ${activeSorted == 'low-wastage' ? 'sortby-selected' : ''}`}
					onClick={() => {
						if (input) {
							wastageSort();
						}
					}}
				>
					Less Wastage
				</div>
				<span>|</span>
				<div
					className={`sortby-option ${activeSorted == 'low-makingCharges' ? 'sortby-selected' : ''}`}
					onClick={() => {
						if (input) {
							makingChargesSort();
						}
					}}
				>
					Less Making Charges
				</div>
			</div>
		</div>
	);
}

export default SortBy;
