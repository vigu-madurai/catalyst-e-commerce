import React, { Fragment, useState } from 'react';
import Helmet from 'react-helmet';
import pods from '../../configs/pods';
import SharedModal from '../../sharedComponents/SharedModal';

import './index.css';

function Product(props) {
	const productId = props.match.params.product_id;
	const products = pods[productId];

	const [activeThumbnail, setActiveThumbnail] = useState(0);

	const renderThumbnails = () => {
		const { images } = products;
		return images.map((img, index) => (
			<img
				src={img}
				key={`thumbnail-img-${index}`}
				className={`thumbnail-images ${index == activeThumbnail ? 'active-thumbnail' : ''}`}
				onClick={() => setActiveThumbnail(index)}
			/>
		));
	};

	return (
		<Fragment>
			<Helmet>
				<title>ABCD Gold Shop | {products.title} </title>
			</Helmet>
			<div className='product-outer-wrapper'>
				<div className='productpage-outer-wrapper'>
					<div className='productpage-inner-wrapper'>
						<div className='productpage-img-wrapper'>
							<div className='productpage-thumbnail-wrapper'>{renderThumbnails()}</div>
							<div className='productpage-selected-image-wrapper'>
								<img src={products.images[activeThumbnail]} alt='image' />
							</div>
						</div>
						<div className='productpage-desc-wrapper'>
							<h2 className='productpage-title-wrapper'>{products.title}</h2>
							<div className='productpage-price-wrapper'>
								&#8377; {products.price.total}
								<span className='productpage-taxes-wrapper'>(Incl. of all taxes)</span>
							</div>

							<div className='productpage-prices-desc-wrapper'>
								The price for this item will vary based on grammage and gold rate on that particular day and is the most
								approximate
							</div>
							<div className='productpage-description'>{products.description}</div>
							<div className='productpage-product-info-outer-wrapper'>
								Product Info:
								<ul className='productpage-product-info-wrapper'>
									<li>
										<span>Purity: </span>
										<span>{products.prodInfo.purity}</span>
									</li>
									<li>
										<span>Brand: </span>
										<span>{products.prodInfo.brand}</span>
									</li>
									<li>
										<span>Gender: </span>
										<span>{products.prodInfo.gender}</span>
									</li>
									<li>
										<span>Metal: </span>
										<span>{products.prodInfo.metal}</span>
									</li>
									<li>
										<span>Jewellery Type: </span>
										<span>{products.prodInfo.jewelleryType}</span>
									</li>
									<li>
										<span>Product: </span>
										<span>{products.prodInfo.product}</span>
									</li>
									<li>
										<span>Collection: </span>
										<span>{products.prodInfo.collection}</span>
									</li>
									<li>
										<span>Metal Color: </span>
										<span>{products.prodInfo.metalColor}</span>
									</li>
									<li>
										<span>Type: </span>
										<span>{products.prodInfo.type}</span>
									</li>
									<li>
										<span>Occassion: </span>
										<span>{products.prodInfo.occassion}</span>
									</li>
								</ul>
							</div>

							<SharedModal modalBtnName={'ADD TO CART'} modalBtnClassName={'btn-cart'} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Product;
