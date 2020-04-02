require('dotenv').config({ path: 'variables.env' })
const express = require('express');
const router = express.Router();
const Datastore = require('nedb')
const authorizeSpotify = require('./../controllers/third-parties/spotify/authorize')
const getAccessToken = require('./../controllers/third-parties/spotify/getAccessToken')
const getRecentlyPlayed = require('./../controllers/third-parties/spotify/getRecentlyPlayed')
const getUserProfile = require('./../controllers/third-parties/spotify/getUserProfile')
const db = new Datastore()
const clientUrl = process.env.CLIENT_URL

router.get('/login', authorizeSpotify)

router.get('/callback', getAccessToken, async (req, res, next) => {
	db.insert(req.credentials, err => {
		if (err) {
			next(err);
		} else {
			res.redirect(`${clientUrl}/?authorized=true`)
		}
	})
})

router.get('/history', (req, res) => {
	db.find({}, (err, docs) => {
		if (err) {
			throw Error('Failed to retrieve documents')
		}

		if (docs.length > 0) {
			const accessToken = docs[0].access_token

			getRecentlyPlayed(accessToken).then(data => {
				res.json(data)
			}).catch(err => console.log(err))
		} else {
			res.json({error: 'Unauthorised'})
		}
	});
});

router.get('/profile', (req, res) => {
	db.find({}, (err, docs) => {
		if (err) {
			throw Error('Failed to retrieve documents')
		}

		if (docs.length > 0) {
			const accessToken = docs[0].access_token

			getUserProfile(accessToken).then(data => {
				res.json(data)
			}).catch(err => console.log(err))
		} else {
			res.json({error: 'Unauthorised'})
		}
	});
});

module.exports = router;