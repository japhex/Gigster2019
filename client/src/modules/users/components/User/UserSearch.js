import React, {useState} from 'react'
import {ApolloConsumer} from "react-apollo";
import {searchUsers} from "api/users/users"
import {StatefulInput} from "baseui/input/index"
import {SearchBlock} from "components/layout/Header/HeaderStyled"
import UserSearchList from './UserSearchList'
import Search from "baseui/icon/search"

const UserSearch = () => {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const handleKeyUp = async (e, client) => {
		const username = e.target.value;
		const users = await client.query({query:searchUsers, variables:{username:username}});

		setSearchValue(username)
		setUsers(username === '' ? [] : users.data.searchUsers)
	}

	return (
		<ApolloConsumer>
			{client => {
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
							onKeyUp={(e) => handleKeyUp(e, client)}
						/>

						<UserSearchList users={users} searchValue={searchValue} />
					</>
				)
			}}
		</ApolloConsumer>
	)
}

export default UserSearch;