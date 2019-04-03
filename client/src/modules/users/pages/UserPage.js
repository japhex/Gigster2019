import React, {lazy, Suspense} from 'react'
import Loader from 'components/utils/Loader';
const User = lazy(() => import('./User'));

const UserPage = (props) => (
	<Suspense fallback={<Loader />}>
		<User {...props} />
	</Suspense>
);

export default UserPage;