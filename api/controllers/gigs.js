const rp = require('request-promise')
import { checkUser, getUserGigs } from './utils'
import { songkick } from '../config/songkick'
import { UserGigs } from '../models/user_gigs'
import { Gig } from '../models/gig'

// Get all gigs for user
export const apiGetGigs = async (user, res) => {
  try {
    checkUser(user)
    return await getUserGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Create gig
export const apiCreateGig = async ({ artist, date, venue }, user) => {
  // 	try {
  // 		checkUser(user);
  //
  // 		const userId = user.id
  //
  // 		const gig = await models.gig.create({artist:artist,date:date,venue:venue});
  //
  // 		let userWithGigs = await models.user.findOne({where: {id: userId}, include:['Gigs']});
  // 		await userWithGigs.addGig(gig.id)
  //
  // 		return getUserGigs(user)
  // 	} catch(err){
  // 		throw new Error(`Error: ${err}`)
  // 	}
}

// Create songkick gig
export const apiCreateSongkickGig = async (
  { songkickId, songkickJson },
  user
) => {
  try {
    checkUser(user)

    const gig = new Gig({ songKickGig: songkickJson })
    gig.save()

    const userGig = new UserGigs({ user: user.id, gig: gig.id, rating: 0 })
    userGig.save()

    return await getUserGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Delete gig
export const apiDeleteGig = async ({ id }, user) => {
  try {
    checkUser(user)
    await UserGigs.deleteOne({ user: user.id, gig: id })

    return await getUserGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Search gig
export const apiSearchGig = async ({ artist }, user) => {
  try {
    checkUser(user)
    const songkickArtist = await rp.get(
      `https://api.songkick.com/api/3.0/events.json?apikey=${songkick.apiKey}&artist_name=${artist}`
    )

    console.log(songkickArtist)

    return JSON.parse(songkickArtist).resultsPage.results.event
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
