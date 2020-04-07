const fetch = require('node-fetch')
const spotify = require('./credentials')

export const refreshAccessToken = async user => {
	const url = 'https://accounts.spotify.com/api/token'

	const data = {
		grant_type: 'refresh_token',
		refresh_token: user.spotify_credentials.refresh_token,
	}

	const str = `Basic ${Buffer.from(`1b0787db269c4f788cc262ee3af9780c:76dbb82e2c8346b0a74552e71ec65a88`).toString('base64')}`

	const searchParams = new URLSearchParams()

	Object.keys(data).forEach(prop => {
		searchParams.set(prop, data[prop])
	})

	const credentials = await fetch(url, {
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', Authorization: str,},
		body: searchParams,
	}).then(res => res.json())

	return credentials.error ? new Error(credentials.error) : credentials
}