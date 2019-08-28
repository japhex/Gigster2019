import React from 'react'
import useReactRouter from 'use-react-router';
import { useQuery } from '@apollo/react-hooks'
import { UserDetailsSection, Divider, StyledHandIcon } from './HeaderStyled';
import { getLoggedInUser } from "api/users/users"
import { logoutUser } from "utils/auth"
import QueryHandler from "../../utils/QueryHandler"

const UserDetails = () => {
	const { history } = useReactRouter()
	const { loading, error, data } = useQuery(getLoggedInUser)
	const { loggedInUser } = data

	if (loading || error) return (<QueryHandler loading={loading} error={error} />)

	return (
		<UserDetailsSection>
			<StyledHandIcon />
			<span>{loggedInUser.username}</span>
			<Divider>|</Divider>
			<span onClick={() => logoutUser(history)}>logout</span>
		</UserDetailsSection>
	);
}

export default UserDetails;