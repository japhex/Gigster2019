import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import GigList from "../../users/components/User/GigList"
import UsersAPI from "../../../api/users"

function User(props) {
	const [user, setUser] = useState(props.user);
	const paramUsername = props.match.params.username;

	useEffect(() => {
		if (user === undefined) {
			const getUser = async () => {
				const user = await UsersAPI.getUser(paramUsername);
				setUser(user[0]);
			}

			getUser();
		}
	}, [paramUsername]);

	return (
		<>
			{user !== undefined &&
				<>
					<h1>{user.username}</h1>
					<GigList gigs={user.Gigs} />
				</>
			}
		</>
	);
}

const mapStateToProps = (state, props) => {
	return {
		user: state.users.collection.filter(user => user.username === props.match.params.username)[0]
	};
};

export default connect(mapStateToProps, null)(User);