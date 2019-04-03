import React from 'react';
import {Link} from 'react-router-dom';

const UsersList = ({users}) => (
	<>
		{users.map(user => {
			const {username, id} = user;
			return <div key={id}><Link to={`/users/${username}`}>{username}</Link></div>
		})}
	</>
);

export default UsersList;