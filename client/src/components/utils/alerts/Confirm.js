import React, {useState, useEffect} from 'react'
import {Div} from './ConfirmStyled';
import {Button} from '@material-ui/core';

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
			<Div active={activeAlert}>
				<h2>
					Are you sure you want to delete this gig?
				</h2>
				<Button onClick={() => handleCancelClick()} color="primary" size="small" variant="contained">
					No
				</Button>
				<Button onClick={() => handleConfirmClick()} color="secondary" size="small" variant="contained">
					Yes
				</Button>
			</Div>
	)
}

export default Confirm;