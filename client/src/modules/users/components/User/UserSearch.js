import React from 'react'
import {StatefulInput} from "baseui/input/index"
import {SearchBlock} from "components/layout/Header/HeaderStyled"
import Search from "baseui/icon/search"

const UserSearch = () => (
	<StatefulInput
		overrides={{
			After: () => (
				<SearchBlock>
					<Search size="16px" />
				</SearchBlock>
			),
		}}
		placeholder="Search for user..."
	/>
)

export default UserSearch;