import React from 'react'

function GigTags(props) {
	const {gig} = props;

	return (
		<ul className="gig__tags">
			{(gig.artistInfo !== undefined && gig.artistInfo.artist !== undefined) &&
				gig.artistInfo.artist.tags.tag.map((tag, index) =>
					<li key={index} className="tag">{tag.name}</li>
			)}
		</ul>
	);
}

export default GigTags;