import React from 'react'
import Gig from '../Gig/Gig';
import ChevronRight from 'baseui/icon/chevron-right'
import {GigListContainer, Ul, H1, Sorting} from "./GigListStyled"

const GigList = ({type, title, gigs, withoutCrud}) => (
	<GigListContainer>
		<>
			<H1>
				<ChevronRight size={24} />{title}
				{type === 'old' &&
					<Sorting>Sort</Sorting>
				}
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