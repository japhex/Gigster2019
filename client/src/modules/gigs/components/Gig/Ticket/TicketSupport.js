import React from 'react'
import {Support} from '../../GigStyled/GigStyled'

export const TicketSupport = ({supports}) => (
	<Support>
		{supports && supports.length > 0 &&
		<>
			<p>
				supports:
			</p>
			{
				supports.map((band, index) =>
					<span>{band}{(index < 9 && index !== supports.length - 1) && ', '}{index === 9 && '...'}</span>
				)
			}
		</>
		}
	</Support>
)