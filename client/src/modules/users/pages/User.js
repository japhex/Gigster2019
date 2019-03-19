import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUser} from './../actions/users';

function User(props) {
	const [user, setUser] = useState(props.user);

	useEffect(() => {
		const {fetchUser} = props;

		if (user === undefined) {
			setUser(fetchUser(props.match.params.username));
		}
	}, []);

	return (
		<>
			{user !== undefined &&
				<h1>{user.username}</h1>
			}
		</>
	);
}

const mapStateToProps = (state, props) => {
	return {
		user: state.users.collection.filter(user => user.username === props.match.params.username)[0]
	};
};

export default connect(mapStateToProps, {fetchUser})(User);