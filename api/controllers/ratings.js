const models = require('../models');
import {checkUser} from './utils'

// Rate gig
export const apiCreateGigRating = async (user) => {
	try {
		checkUser(user);

		const returnUser = await models.user.findOne({where: {id: user.id}, include: ['Gigs']});
		const Gigs = returnUser.Gigs

		return await splitGigs(Gigs)
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}