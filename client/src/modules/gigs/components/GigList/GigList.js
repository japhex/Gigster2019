import React from 'react'
import Gig from '../Gig/Gig';
import {GigListContainer, Ul, H1} from "./GigListStyled"

const GigList = ({type, title, gigs, withoutCrud}) => (
	<GigListContainer>
		<>
			<H1>{title}</H1>
			{gigs.length > 0 ?
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