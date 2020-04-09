export const spotifyApiUrl = (accessToken, method) => {
	return {
		url: `${process.env.SPOTIFY_URL}${getSpotifyApiUrl(method)}`,
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	}
}

const getSpotifyApiUrl = method => {
	const apiUrls = {
		profile: '',
		recentlyPlayed: '/player/recently-played?limit=10'
	}
	return apiUrls[method]
}