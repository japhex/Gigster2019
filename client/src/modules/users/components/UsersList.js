import React from 'react';
import {Link} from 'react-router-dom';

function UsersList({users}) {
	return (
		<>
			{users.map(user => {
				const {username} = user;
				return <div><Link to={`/users/${username}`} key={username}>{username}</Link></div>
			})}
		</>
	);
}

export default UsersList;