import React from 'react';
import { UserProvider } from './userContext';
import { getLoggedInUser } from "api/users/users"
import {useQuery} from "@apollo/react-hooks"

const UserProviderWrapper = ({children}) => {
	const { loading, error, data } = useQuery(getLoggedInUser)

	return (
		<UserProvider value={{user: loading || error ? {} : data.loggedInUser}}>
			{children}
		</UserProvider>
	)
}

export default UserProviderWrapper