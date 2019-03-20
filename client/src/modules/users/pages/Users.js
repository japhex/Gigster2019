import React, {useEffect, Suspense, lazy} from 'react'
import {fetchUsers} from "../actions/users"
import {connect} from "react-redux"
import Loader from 'components/utils/Loader';
const UsersList = lazy(() => import('./../components/UsersList'));

function Users({users, fetchUsers}) {
	useEffect(() => {
		fetchUsers();
	});

	return (
		<>
			<Suspense fallback={<Loader />}>
				<UsersList users={users} />
			</Suspense>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users.collection
	};
};

export default connect(mapStateToProps, { fetchUsers })(Users);