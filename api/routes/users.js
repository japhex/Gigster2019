const express = require('express');
const router = express.Router();
const models = require("./../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const jwtMW = exjwt({secret: 'super secret'});

router.post('/signup', async (req, res) => {
	const { username, password } = req.body;
	const saltRounds = 10;

	try {
		const hash = await bcrypt.hash(password, saltRounds);
		await models.user.create({username: username, password: hash});
		res.json("user created!");
	} catch(err) {
		console.log(err);
		res.json({error:err});
	}
})

router.post('/login', async (req, res) => {
	const { username, password } = req.body.payload;

	try {
		const user = await models.user.findOne({where: { username: username }})

		if (user === null) {
			res.status(401).json({success: false, token: null, err: 'Invalid Credentials'});
		}

		const result = await bcrypt.compare(password, user.password);

		if (result) {
			let token = jwt.sign({id: user.id, username: user.username}, 'super secret', { expiresIn: 129600 });
			res.json({success: true, err: null, token, username: user.username, userId: user.id});
		} else {
			res.status(401).json({success: false, token: null, err: 'Entered Password and Hash do not match!'});
		}
	} catch(err) {
		console.log(err);
		res.json({error:err});
	}
});

router.get('/', jwtMW, (req, res) => {
	res.send('You are authenticated');
});

module.exports = router;