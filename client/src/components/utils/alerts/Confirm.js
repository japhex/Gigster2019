import React, {useState, useEffect} from 'react'
import {Dialog,DialogActions,DialogTitle} from '@material-ui/core';
import {Button, KIND, SIZE} from 'baseui/button';

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
			<Dialog open={activeAlert}>
				<DialogTitle>
					{'Are you sure you want to delete this gig?'}
				</DialogTitle>
				<DialogActions>
					<Button onClick={() => handleConfirmClick()} size={SIZE.compact}>
						Yes
					</Button>
					<Button onClick={() => handleCancelClick()} kind={KIND.secondary} size={SIZE.compact}>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
	)
}

export default Confirm;