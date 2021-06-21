import { useQuery } from '@apollo/react-hooks'
import { Card, StyledBody, StyledThumbnail } from 'baseui/card'
import { Link } from 'react-router-dom'

import { getUsers } from 'api/users/users'
import QueryHandler from 'components/utils/queryHandler'

const UsersList = () => {
  const { loading, error, data } = useQuery(getUsers)

  if (loading || error) return <QueryHandler loading={loading} error={error} />

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
}

export default UsersList
