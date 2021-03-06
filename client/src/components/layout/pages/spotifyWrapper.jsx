import { useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import { getSpotifyCallback } from 'api/spotify/spotify'

const search = window.location.search
const params = new URLSearchParams(search)
const code = params.get('code')

const SpotifyWrapper = () => {
  const history = useHistory()
  const { data } = useQuery(getSpotifyCallback, { variables: { code } })

  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data])

  return null
}

export default SpotifyWrapper
