import React, {useState, useEffect} from 'react'
import {ModalContainer, Modal} from '../styled/Modal'

const SimpleModal = ({modalActive}) => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setIsOpen(modalActive)
	}, [setIsOpen, modalActive])

	const handleCloseClick = () => {
		setIsOpen(false)
	}

	return (
		isOpen &&
			<ModalContainer>
				<Modal>
					<a href="#" onClick={handleCloseClick}>x</a>
					TEST
				</Modal>
			</ModalContainer>
	)
}

export default SimpleModal;