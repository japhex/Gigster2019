import React from 'react'
import Gig from './Gig';
import ChevronRight from 'baseui/icon/chevron-right'
import {GigListContainer, Ul, H1, Sorting} from "../GigStyled/GigListStyled"

const GigList = ({type, title, gigs, withoutCrud}) => (
	<GigListContainer type={type}>
		<>
			<H1>
				<ChevronRight size={24} />{title}
			</H1>
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