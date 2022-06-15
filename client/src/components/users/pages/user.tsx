import { useQuery } from '@apollo/react-hooks'
import { getUser } from 'api/users/users'
import Block from 'components/users/user/block'
import QueryHandler from 'components/utils/queryHandler'

const User = ({ match }) => {
  const paramUsername = match.params.username
  const { data, loading, error } = useQuery(getUser, {
    variables: { username: paramUsername },
  })

  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return <Block user={data.user} />
}

export default User
