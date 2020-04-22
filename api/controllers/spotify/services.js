import { User } from '../../models/user'
import { spotifyApiUrl } from './api/methods'
import { checkResponse } from './utils/utils'

const fetch = require('node-fetch')

export const apiSpotifyUserProfile = async (user) => {
  return { user: await spotifyFetch(user, 'profile') }
}

export const apiSpotifyPlaylistHistory = async (user) => {
  return { user: await spotifyFetch(user, 'recentlyPlayed') }
}

const spotifyFetch = async (user, spotifyMethod) => {
  const uptoDateUser = await User.findOne({ _id: user.id })
  const { url, method, headers } = await spotifyApiUrl(
    uptoDateUser.spotify_credentials.access_token,
    spotifyMethod
  )

  return await fetch(url, {
    method: method,
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => {
      return checkResponse(data, uptoDateUser)
    })
    .catch((error) => console.log(error))
}
