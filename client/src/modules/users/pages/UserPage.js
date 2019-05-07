import React from 'react'
import UserBlock from '../components/User/UserBlock';
import QueryHandler from 'components/utils/QueryHandler'
import { Query } from "react-apollo";
import {getUser} from "api/users/users"

const User = (props) => {
	const paramUsername = props.match.params.username;

	return (
		<Query query={getUser} variables={{username:paramUsername}}>
			{({ loading, error, data }) => {
				if (loading || error) return (<QueryHandler loading={loading} error={error} />)

				return <UserBlock user={data.user} />
			}}
		</Query>
	)
}

export default User;