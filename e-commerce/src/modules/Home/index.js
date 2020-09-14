import React, {useState, useEffect} from 'react';
import Pod from '../../sharedComponents/Pod';
import pods from '../../configs/pods';
import './index.css';
import SortBy from '../../components/SortBy';

function Home(props) {
	const [products, setProducts] = useState(Object.values(pods));

	const setProductsValues = (data) => {
		setProducts([...data]);
	}

	return (
		<div className='home-outer-wrapper'>
			<SortBy input={products} setProductsValues={setProductsValues} />
			<div className='homepage-pod-wrapper'>
				<Pod products={products} />
			</div>
		</div>
	);
}

export default Home;
