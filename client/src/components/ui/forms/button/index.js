import React from 'react'
import {ButtonStyled} from './styling'

export const Button = (props) => {
	const {icon, children} = props

	return (
		<ButtonStyled {...props}>
			{icon}
			<span>{children}</span>
		</ButtonStyled>
	)
}