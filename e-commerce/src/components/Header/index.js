import React from 'react';
import './index.css';
import Placeholder from '../../sharedComponents/Placeholder';
import SharedModal from '../../sharedComponents/SharedModal';

function Header() {
	return (
		<header className='header-wrapper'>
			<Placeholder />
			<SharedModal modalBtnName={'GOTO CART'} modalBtnClassName={'btn-cart'} />
		</header>
	);
}

export default Header;
