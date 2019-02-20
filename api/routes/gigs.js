const express = require('express');
const router = express.Router();
const exjwt = require('express-jwt');
const jwtMW = exjwt({secret: 'super secret'});
const gigsService = require('../controllers/gigs');

router.get('/', jwtMW, async (req, res) => {
	const gigs = await gigsService.getAll(req, res);
	res.json(gigs);
});

module.exports = router;