import React from 'react'
import './Gig.scss';
import GigHeader from "./GigHeader/GigHeader"
import GigFooter from "./GigFooter/GigFooter"
import GigTags from "./GigTags/GigTags"
import Loader from 'components/utils/Loader';

const Gig = ({gig, type, withoutCrud, loadingAdditionalContent}) => (
	<li className="gig__card" data-test="component-gig">
		<GigHeader gig={gig} type={type} />
		{/* X other people on Gigster are attending this show! */}
		{loadingAdditionalContent ?
				<Loader />
			:
				<>
					<GigTags gig={gig} />
				</>
		}
		{/* Only let user edit their gigs */}
		{!withoutCrud &&
			<GigFooter gigId={gig.id}/>
		}
	</li>
);

export default Gig;