import React from 'react'
import './Gig.scss';
import GigHeader from "./GigHeader/GigHeader"
import GigTags from "./GigTags/GigTags"

function Gig(props) {
	const {gig, type} = props;

	return (
		<li className="gig__card" data-test="component-gig">
			<GigHeader gig={gig} type={type} />
			<GigTags gig={gig} />
			{/* X other people on Gigster are attending this show! */}
			{type === 'new' && gig.artistInfo !== undefined &&
				<img src={gig.artistInfo.artist.image[5]['#text']}/>
			}
		</li>
	);
}

export default Gig;