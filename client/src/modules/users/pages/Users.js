import React, {useEffect} from 'react'
import {fetchUsers} from "../actions/users"
import {connect} from "react-redux"

function Users(props) {
	useEffect(() => {
		const {fetchUsers} = props;

		fetchUsers();
	}, []);

	const { users } = props;

	return (
		<>
			{users.map(user =>
				<p>{user.username}</p>
			)}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users.users
	};
};

export default connect(mapStateToProps, { fetchUsers })(Users);