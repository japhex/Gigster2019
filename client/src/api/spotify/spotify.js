import gql from 'graphql-tag'

export const getSpotifyLogin = gql`
  {
    spotifyLogin {
      url
    }
  }
`

export const getSpotifyCallback = gql`
  query spotifyCallback($code: String!) {
    spotifyCallback(code: $code)
  }
`

export const getSpotifyUserProfile = gql`
  {
    spotifyUserProfile {
      user
    }
  }
`
