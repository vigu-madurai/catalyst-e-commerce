import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../sharedComponents/Button';

import './index.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function SharedModal(props) {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button btnName={props.modalBtnName || 'Click Me'} btnClick={() => openModal()} btnClassName={props.modalBtnClassName} />
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<button onClick={closeModal} className='modal-close-btn'>
					x
				</button>
				<div className='under-dev'>Under Development!!</div>
			</Modal>
		</div>
	);
}

export default SharedModal;
