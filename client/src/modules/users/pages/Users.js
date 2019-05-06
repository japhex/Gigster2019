import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {Link} from 'react-router-dom';

const getUsers = gql`
{
  users {
    id
    username
  }
}`;

const UsersList = () => (
	<Query query={getUsers} >
		{({ loading, error, data }) => {
			if (loading) return <p>Loading…</p>;
			if (error) return <p>Error :(</p>;

			return data.users.map(({ id, username }) => (
				<div key={id}><Link to={`/users/${username}`}>{username}</Link></div>
			))
		}}
	</Query>
);

export default UsersList;