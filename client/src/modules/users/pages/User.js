import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUserByUsername} from "../actions/users"
import UserBlock from '../components/User/UserBlock';

function User(props) {
	const {user} = props;
	// Props
	const paramUsername = props.match.params.username;
	const {fetchUserByUsername} = props;

	// Lifecycle
	useEffect(() => {
		fetchUserByUsername(paramUsername)
	}, [paramUsername]);

	return (
		user !== undefined &&
			<UserBlock user={user} />
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.users.activeUser
	};
};

export default connect(mapStateToProps, {fetchUserByUsername})(User);