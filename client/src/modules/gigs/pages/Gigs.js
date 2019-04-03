import React, {Suspense, lazy} from 'react'
const UserGigs = lazy(() => import('./UserGigs'));

const Gigs = () => (
	<Suspense fallback={`loading...`}>
		<UserGigs />
	</Suspense>
);

export default Gigs;