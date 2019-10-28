import React from 'react'
import Block from '../user/block';
import QueryHandler from 'components/utils/queryHandler'
import { Query } from "react-apollo";
import {getUser} from "api/users/users"

const User = ({match}) => {
	const paramUsername = match.params.username;

	return (
		<Query query={getUser} variables={{username:paramUsername}}>
			{({ loading, error, data }) => {
				if (loading || error) return (<QueryHandler loading={loading} error={error} />)

				return <Block user={data.user} />
			}}
		</Query>
	)
}

export default User;