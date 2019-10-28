import React from 'react'
import Gig from './gig';
import {GigListContainer, Ul} from "../styles/listStyled"

const GigList = ({type, title, gigs, withoutCrud}) => (
	<GigListContainer>
		<>
			{gigs !== null ?
				<Ul>
					{gigs.map(gig =>
						<Gig key={gig.id} gig={gig} type={type} withoutCrud={withoutCrud} />
					)}
				</Ul>
			:
				<>
					No {title}
				</>
			}
		</>
	</GigListContainer>
);

export default GigList;