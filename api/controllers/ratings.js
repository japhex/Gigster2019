import {UserGigs} from "../mongo_models/user_gigs"
import {checkUser} from './utils'

// Rate gig
export const apiCreateGigRating = async ({id, rating}, user) => {
	try {
		checkUser(user);

		return await UserGigs.findOneAndUpdate({gig:id}, {rating: rating});
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}