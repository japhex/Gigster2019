import React, {useState, useEffect} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'baseui/modal';
import {Button, KIND, SIZE} from 'baseui/button';
import {Buttons} from "components/utils/styled/ModalStyled"

const Confirm = ({active, callbackConfirm, callbackCancel}) => {
	const [activeAlert, setActiveAlert] = useState(false)

	useEffect(() => {
		setActiveAlert(active)
	}, [active]);

	const handleCancelClick = () => {
		setActiveAlert(false)
		callbackCancel()
	}

	const handleConfirmClick = () => {
		setActiveAlert(false)
		callbackConfirm()
	}

	return (
		activeAlert &&
		<Modal isOpen={activeAlert}>
			<ModalHeader>Delete gig</ModalHeader>
			<ModalBody>
				Are you sure you want to delete this gig?
			</ModalBody>
			<ModalFooter>
				<Buttons>
					<Button onClick={() => handleConfirmClick()} size={SIZE.compact}>
						Yes
					</Button>
					<Button onClick={() => handleCancelClick()} kind={KIND.secondary} size={SIZE.compact}>
						Cancel
					</Button>
				</Buttons>
			</ModalFooter>
		</Modal>
	)
}

export default Confirm;