const express = require('express');
const router = express.Router();
const exjwt = require('express-jwt');
const jwtMW = exjwt({secret: 'super secret'});
const songkickService = require('../../controllers/third-parties/songkick');

router.post('/artist', jwtMW, async (req, res) => {
	const artist = await songkickService.searchArtist(req, res);
	res.json(artist);
});

router.post('/venue', jwtMW, async (req, res) => {
	const venue = await songkickService.searchVenue(req, res);
	res.json(venue);
});

router.post('/event', jwtMW, async (req, res) => {
	const event = await songkickService.searchEvent(req, res);
	res.json(event);
});

module.exports = router;