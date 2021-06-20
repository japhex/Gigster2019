import React from 'react'

import { Link } from 'react-router-dom'

import { UserList } from 'components/users/user/styles/userSearchStyled'

const Results = ({ users }) => (
  <UserList users={users}>
    {users.map(user => (
      <li key={user.id}>
        <Link to={`/users/${user.username}`}>{user.username}</Link>
      </li>
    ))}
  </UserList>
)

export default Results
