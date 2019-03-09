import React, {Suspense, lazy} from 'react'
const UserGigs = lazy(() => import('./UserGigs'));

function Gigs() {
	return (
		<Suspense fallback={`loading...`}>
			<UserGigs />
		</Suspense>
	);
}

export default Gigs;