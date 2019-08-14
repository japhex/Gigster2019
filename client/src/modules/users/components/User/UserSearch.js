import React, {useState} from 'react'
import {useApolloClient} from "@apollo/react-hooks"
import {searchUsers} from "api/users/users"
import {StatefulInput} from "baseui/input/index"
import {SearchBlock} from "components/layout/Header/HeaderStyled"
import UserSearchList from './UserSearchList'
import Search from "baseui/icon/search"

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
			<StatefulInput
				overrides={{
					After: () => (
						<SearchBlock>
							<Search size="16px"/>
						</SearchBlock>
					),
				}}
				placeholder="Search for user..."
				onKeyUp={(e) => handleKeyUp(e)}
			/>

			<UserSearchList users={users} />
		</>
	)
}

export default UserSearch;