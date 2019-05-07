import React from 'react';
import { Query } from "react-apollo";
import {getUsers} from "api/users/users"
import {Link} from 'react-router-dom';
import QueryHandler from 'components/utils/QueryHandler'

const UsersList = () => (
	<Query query={getUsers} >
		{({ loading, error, data }) => {
			if (loading || error) return (<QueryHandler loading={loading} error={error} />)

			return data.users.map(({ id, username }) => (
				<div key={id}><Link to={`/users/${username}`}>{username}</Link></div>
			))
		}}
	</Query>
);

export default UsersList;