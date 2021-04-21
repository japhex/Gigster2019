import React from 'react'

import { Card, StyledBody, StyledThumbnail } from 'baseui/card'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import { getUsers } from '../../../api/users/users'
import QueryHandler from '../../utils/queryHandler'

const UsersList = () => (
  <Query query={getUsers}>
    {({ loading, error, data }) => {
      if (loading || error)
        return <QueryHandler loading={loading} error={error} />

      return data.users.map(({ id, username }) => (
        <div key={id}>
          <Link to={`/users/${username}`}>
            <Card title={username}>
              <StyledThumbnail src="" />
              <StyledBody>test</StyledBody>
            </Card>
          </Link>
        </div>
      ))
    }}
  </Query>
)

export default UsersList
