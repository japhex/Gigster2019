import React from 'react'
import useReactRouter from 'use-react-router';
import { useQuery } from '@apollo/react-hooks'
import { UserDetailsSection, Username, Logout, Divider } from './HeaderStyled';
import { getLoggedInUser } from "api/users/users"
import { logoutUser } from "utils/auth"
import QueryHandler from "../../utils/queryHandler"

const UserDetails = () => {
	const { history } = useReactRouter()
	const { loading, error, data } = useQuery(getLoggedInUser)
	const { loggedInUser } = data

	if (loading || error) return (<QueryHandler loading={loading} error={error} />)

	return (
		<UserDetailsSection>
			<Username>{loggedInUser.username}</Username>
			<Divider>|</Divider>
			<Logout onClick={() => logoutUser(history)}>logout</Logout>
		</UserDetailsSection>
	);
}

export default UserDetails;