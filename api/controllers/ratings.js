import {UserGigs} from "../models/user_gigs"
import {checkUser} from './utils'

// Rate gig
export const apiCreateGigRating = async ({id, rating}, user) => {
	try {
		checkUser(user);
		await UserGigs.findOneAndUpdate({gig:id}, {rating: rating});
	} catch(err){
		throw new Error(`Error: ${err}`)
	}
}