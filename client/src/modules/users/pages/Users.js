import React, {Suspense, lazy} from 'react'
import Loader from 'components/utils/Loader';
import withUsers from 'modules/middleware/withUsers';
const UsersList = lazy(() => import('./../components/UsersList'));

const Users = ({users}) => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<UsersList users={users} />
			</Suspense>
		</>
	);
}

export default withUsers(Users);