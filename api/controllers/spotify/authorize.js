import { getAccessToken } from './getAccessToken'
import { User } from '../../models/user'

export const apiSpotifyLogin = () => {
  return {
    url: `https://accounts.spotify.com/authorize?&client_id=1b0787db269c4f788cc262ee3af9780c&redirect_uri=${encodeURI(
      `http://localhost:3005/spotify/callback`
    )}&response_type=code&scope=user-read-recently-played`,
  }
}

export const apiSpotifyCallback = async (user, code) => {
  try {
    const credentials = await getAccessToken(code)

    if (credentials.message === 'invalid_grant') {
      throw new Error(credentials.message)
    }

    await User.findOneAndUpdate(
      { _id: user.id },
      { spotify_credentials: credentials }
    )
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
