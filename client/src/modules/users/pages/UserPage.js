import React, {lazy, Suspense} from 'react'
import Loader from 'components/utils/Loader';
const User = lazy(() => import('./User'));

function UserPage(props) {
	return (
		<Suspense fallback={<Loader />}>
			<User {...props} />
		</Suspense>
	);
}

export default UserPage;