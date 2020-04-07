import {User} from "../../models/user"

const fetch = require('node-fetch')
import {checkResponse} from './utils/utils'

export const apiSpotifyUserProfile = async user => {
	const uptoDateUser = await User.findOne({_id: user.id});
	const spotifyUser = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${uptoDateUser.spotify_credentials.access_token}`,
		},
	})
	.then(res => res.json())
	.then(data => {
		return checkResponse(data, uptoDateUser)
	})
	.catch(error => console.log(error))

	return {user: spotifyUser}
}

export const apiSpotifyPlaylistHistory = accessToken => {
	const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=10'

	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	})
		.then(res => res.json())
		.then(data => data.items)
		.catch(error => console.log(error))
}