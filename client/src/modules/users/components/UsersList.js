import React from 'react';
import {Link} from 'react-router-dom';

function UsersList({users}) {
	return (
		<>
			{users.map(user => {
				const {username} = user;
				return <Link to={`/users/${username}`} key={username}>{username}</Link>
			})}
		</>
	);
}

export default UsersList;