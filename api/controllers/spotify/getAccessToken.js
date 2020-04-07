const fetch = require('node-fetch')
const spotify = require('./credentials')

export const getAccessToken = async (code) => {
	if (code) {
		const data = {
			grant_type: 'authorization_code',
			code,
			redirect_uri: 'http://localhost:3005/spotify/callback',
			client_id: '1b0787db269c4f788cc262ee3af9780c',
			client_secret: '76dbb82e2c8346b0a74552e71ec65a88',
		}

		const searchParams = new URLSearchParams()

		Object.keys(data).forEach(prop => {
			searchParams.set(prop, data[prop])
		})


		const credentials = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
			body: searchParams,
		}).then(res => res.json())

		return credentials.error ? new Error(credentials.error) : credentials
	}
}