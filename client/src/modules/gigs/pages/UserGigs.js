import React, {Suspense, lazy} from 'react'
import './UserGigs.scss';
const GigList = lazy(() => import('./../components/GigList/GigList'));

function UserGigs() {
	return (
		<Suspense fallback={`loading...`}>
			<div className="gig-list__container">
				<GigList type="new" title="Upcoming Shows" />
				<GigList type="old" title="Past Shows" />
			</div>
		</Suspense>
	);
}

export default UserGigs;