const fetch = require('node-fetch');

const getUserProfile = accessToken => {
	const url = 'https://api.spotify.com/v1/me';

	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	}).then(res => res.json()).then(data => data).catch(error => console.log(error));
};

module.exports = getUserProfile;