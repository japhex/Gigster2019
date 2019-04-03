import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUserByUsername} from "../actions/users"
import UserBlock from '../components/User/UserBlock';
import Loader from 'components/utils/Loader';

const User = (props) => {
	const {user, isLoading} = props;
	const paramUsername = props.match.params.username;
	const {fetchUserByUsername} = props;

	useEffect(() => {
		fetchUserByUsername(paramUsername)
	}, [paramUsername]);

	return (
		user !== undefined &&
			isLoading ?
				<Loader />
			:
				<UserBlock user={user}/>

	);
}

const mapStateToProps = (state) => {
	return {
		user: state.users.activeUser,
		isLoading: state.users.isLoading
	};
};

export default connect(mapStateToProps, {fetchUserByUsername})(User);