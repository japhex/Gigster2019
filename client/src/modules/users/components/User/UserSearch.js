import React from 'react'
import { ApolloConsumer } from "react-apollo";
import {searchUsers} from "api/users/users"
import {StatefulInput} from "baseui/input/index"
import {SearchBlock} from "components/layout/Header/HeaderStyled"
import Search from "baseui/icon/search"

const UserSearch = () => {

	const handleKeyUp = async (e, client) => {
		const username = e.target.value;
		const users = await client.query({query:searchUsers, variables:{username:username}});

		console.log(users.data)
	}

	return (
		<ApolloConsumer>

			{client => {
				return (
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
				)
			}}
		</ApolloConsumer>
	)
}

export default UserSearch;