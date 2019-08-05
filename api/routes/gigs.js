const express = require('express');
const router = express.Router();
const exjwt = require('express-jwt');
const jwtMW = exjwt({secret: 'super secret'});
const gigsService = require('../controllers/gigs');

router.get('/', jwtMW, async (req, res) => {
	const gigs = await gigsService.getAll(req, res);
	res.json(gigs);
});

router.get('/details', jwtMW, async (req, res) => {
	const gigs = await gigsService.getAdditionalGigDetail(req, res);
	res.json(gigs);
});

router.post('/create', jwtMW, async (req, res) => {
	const gigs = await gigsService.createGig(req, res);
	res.json(gigs);
});

router.delete('/delete/:id', jwtMW, async (req, res) => {
	const gigs = await gigsService.deleteGig(req, res);
	res.json(gigs);
});

module.exports = router;