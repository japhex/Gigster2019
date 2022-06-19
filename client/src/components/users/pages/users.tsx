import { useQuery } from '@apollo/react-hooks'
import { getUsers } from 'api/users/users'
import QueryHandler from 'components/utils/queryHandler'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const { loading, error, data } = useQuery(getUsers)

  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return data.users.map(({ id, username }) => (
    <div key={id}>
      <Link to={`/users/${username}`}></Link>
    </div>
  ))
}

export default UsersList
