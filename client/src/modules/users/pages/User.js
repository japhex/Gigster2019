import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUserByUsername} from "../actions/users"
import GigList from "../../users/components/User/GigList"
import StatsHeader from "../../users/components/User/StatsHeader"

function User(props) {
	// State
	const [user, setUser] = useState(props.user);
	// Props
	const paramUsername = props.match.params.username;
	const {fetchUserByUsername} = props;

	// Lifecycle
	useEffect(() => {
		fetchUserByUsername(paramUsername);
	}, [paramUsername]);

	return (
		user !== undefined &&
			<>
				<StatsHeader user={user} />
				<h1>{user.username}</h1>
				<GigList gigs={user.Gigs} />
			</>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.users.activeUser
	};
};

export default connect(mapStateToProps, {fetchUserByUsername})(User);