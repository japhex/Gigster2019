import React from 'react'
import moment from 'moment';
import {Date, Day, Month, Year } from '../../GigStyled/GigStyled'

export const TicketDate = ({gigDate}) => (
	<Date>
		<Month>
			{moment(gigDate).format("MMM")}
		</Month>
		<Day>
			{moment(gigDate).format("D")}
		</Day>
		<Year>
			{moment(gigDate).format("YYYY")}
		</Year>
	</Date>
)