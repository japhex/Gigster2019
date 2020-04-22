import { refreshAccessToken } from '../refreshAccessToken'
import { User } from '../../../models/user'

export const checkResponse = async (response, user) => {
  try {
    if (response.error && response.error.status === 401) {
      const newCredentials = await refreshAccessToken(user)

      if (newCredentials.message === 'invalid_grant') {
        throw new Error(newCredentials.message)
      }

      await User.findOneAndUpdate(
        { _id: user.id },
        { spotify_credentials: newCredentials }
      )
    } else {
      return response
    }
  } catch (err) {
    console.log(err)
  }
}
