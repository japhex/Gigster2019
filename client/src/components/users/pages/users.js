import React from 'react'
import { Query } from 'react-apollo'
import { getUsers } from 'api/users/users'
import { Link } from 'react-router-dom'
import QueryHandler from 'components/utils/queryHandler'
import { Card, StyledBody, StyledThumbnail } from 'baseui/card'

const UsersList = () => (
  <Query query={getUsers}>
    {({ loading, error, data }) => {
      if (loading || error)
        return <QueryHandler loading={loading} error={error} />

      return data.users.map(({ id, username }) => (
        <div key={id}>
          <Link to={`/users/${username}`}>
            <Card title={username}>
              <StyledThumbnail src={''} />
              <StyledBody>test</StyledBody>
            </Card>
          </Link>
        </div>
      ))
    }}
  </Query>
)

export default UsersList
