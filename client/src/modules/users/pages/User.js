import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUserByUsername} from "../actions/users"
import GigList from "../../users/components/User/GigList"
import StatsHeader from "../components/User/StatsHeader/StatsHeader"
import './User.scss';

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
			<>
				<h1 className="user-username">{user.username}</h1>
				<StatsHeader user={user} />
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