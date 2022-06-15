import { UserGigs } from '../models/user-gigs'

import { checkUser } from './utils'

// Rate gig
export const apiCreateGigRating = async ({ id, rating }, user) => {
  try {
    checkUser(user)
    await UserGigs.findOneAndUpdate({ gig: id }, { rating })
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
