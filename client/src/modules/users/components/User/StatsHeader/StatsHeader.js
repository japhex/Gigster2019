import React from 'react'
import StatBox from './StatBox';
import './StatsHeader.scss';

function GigList({user}) {
	return (
		user.oldGigs !== undefined &&
			<>
				<div className="user-stats">
					<StatBox digit={user.oldGigs.length} message={'Past gigs'} />
					<StatBox digit={user.newGigs.length} message={'Upcoming gigs'} />
				</div>
			</>
	);
}

export default GigList;