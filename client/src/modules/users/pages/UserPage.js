import React from 'react'
import UserBlock from '../components/User/UserBlock';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getUser = gql`
query user($username: String!) {
    user(username: $username) {
        id
        username
        gigs {
            artist
            date
            venue
        }
    }
}`;

const User = (props) => {
	const paramUsername = props.match.params.username;

	return (
		<Query query={getUser} variables={{username:paramUsername}}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading…</p>;
				if (error) return <p>Error :(</p>;

				return <UserBlock user={data.user} />
			}}
		</Query>
	)
}

export default User;