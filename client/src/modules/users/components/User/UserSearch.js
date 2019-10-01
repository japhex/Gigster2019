import React, {useState} from 'react'
import {useApolloClient} from "@apollo/react-hooks"
import {searchUsers} from "api/users/users"
import UserSearchList from './UserSearchList'
import {Input} from 'japhex-ui'

const UserSearch = () => {
	const client = useApolloClient();
	const [users, setUsers] = useState([]);

	const handleKeyUp = async (e) => {
		const username = e.target.value;
		const users = await client.query({query:searchUsers, variables:{username:username}});

		setUsers(username === '' ? [] : users.data.searchUsers)
	}

	return (
		<>
			<Input
				placeholder="Search for user..."
				onKeyUp={(e) => handleKeyUp(e)}
			/>

			<UserSearchList users={users} />
		</>
	)
}

export default UserSearch;