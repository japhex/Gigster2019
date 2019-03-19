import React, {useEffect} from 'react'
import {connect} from "react-redux"

function Users(props) {
	useEffect(() => {

	}, []);

	const { user } = props;

	return (
		<>
			<h1>{user.username}</h1>
		</>
	);
}

const mapStateToProps = (state, props) => {
	return {
		user: state.users.collection.filter(user => user.username === props.match.params.username)[0]
	};
};

export default connect(mapStateToProps, null)(Users);