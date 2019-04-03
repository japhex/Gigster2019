import React, {useEffect} from 'react'
import {compose} from 'redux';
import {connect} from "react-redux";
import {fetchUsers} from "../users/actions/users"

const withUsers = WrappedComponent => (props) => {
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<WrappedComponent {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		users: state.users.collection
	};
};

const composedWithUsers = compose(
	connect(mapStateToProps, { fetchUsers }),
	withUsers
)

export default composedWithUsers;