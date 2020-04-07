import {refreshAccessToken} from "../refreshAccessToken"
import {User} from "../../../models/user"

export const checkResponse = async (response, user) => {
	if (response.error && response.error.status === 401) {
		const newCredentials = await refreshAccessToken(user)
		await User.findOneAndUpdate({_id: user.id}, {spotify_credentials: newCredentials});
	} else {
		return response
	}
}