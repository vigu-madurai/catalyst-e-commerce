import React from 'react';
import './index.css';

function Button(props) {
	const { btnName, btnClick, btnClassName } = props;
	return (
		<div className={`btn-outer-wrapper ${btnClassName}`} onClick={() => btnClick()}>
			{btnName}
		</div>
	);
}

export default Button;
