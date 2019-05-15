import React, {useState, useEffect} from 'react'
import {Button,Dialog,DialogActions,DialogTitle} from '@material-ui/core';

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
					<Button onClick={() => handleCancelClick()} color="primary" size="small" variant="contained">
						No
					</Button>
					<Button onClick={() => handleConfirmClick()} color="secondary" size="small" variant="contained">
						Yes
					</Button>
				</DialogActions>
			</Dialog>
	)
}

export default Confirm;