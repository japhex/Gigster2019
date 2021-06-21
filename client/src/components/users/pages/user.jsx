import { useQuery } from '@apollo/react-hooks'

import { getSpotifyCallback } from 'api/spotify/spotify'
import Block from 'components/users/user/block'
import QueryHandler from 'components/utils/queryHandler'

const User = ({ match }) => {
  const paramUsername = match.params.username
  const { data, loading, error } = useQuery(getSpotifyCallback, {
    variables: { username: paramUsername },
  })

  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return <Block user={data.user} />
}

export default User
