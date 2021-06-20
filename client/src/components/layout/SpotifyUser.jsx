import React, { useContext } from 'react'

import { useQuery } from '@apollo/react-hooks'

import { getSpotifyLogin } from 'api/spotify/spotify'
import {
  User,
  Username,
  SpotifyUnauthorised,
} from 'components/layout/styled/SpotifyUserStyled'
import QueryHandler from 'components/utils/queryHandler'
import SpotifyContext from 'context/spotify/spotifyContext'

const SpotifyUser = () => {
  const { loading, error, data } = useQuery(getSpotifyLogin)
  const spotifyContext = useContext(SpotifyContext)
  const { authenticated, user } = spotifyContext

  if (loading || error) return <QueryHandler loading={loading} error={error} />

  return (
    <User>
      <img
        height="20"
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        alt="Login with Spotify"
      />
      {authenticated ? (
        <>
          <Username>{user.display_name}</Username>
          <img alt={user.display_name} src={user.images[0].url} />
        </>
      ) : (
        <SpotifyUnauthorised>
          <a href={data.spotifyLogin.url}>Connect your Spotify account</a>
        </SpotifyUnauthorised>
      )}
    </User>
  )
}

export default SpotifyUser
