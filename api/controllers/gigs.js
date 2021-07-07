import { songkick } from '../config/songkick'
import { Gig } from '../models/Gig'
import { UserGigs } from '../models/user_gigs'

import {
  checkUser,
  getFilteredByFestivalGigs,
  getFilteredByMonthGigs,
  getFilteredByYearGigs,
  getUserGigs,
} from './utils'

const rp = require('request-promise')

// Get all gigs for user
export const apiGetGigs = async (user) => {
  try {
    checkUser(user)
    return await getUserGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Get all gigs for user filtered by type=Festival
export const apiGetFestivalFilteredGigs = async (user) => {
  try {
    checkUser(user)
    return await getFilteredByFestivalGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Get all gigs for user filtered by month
export const apiGetMonthFilteredGigs = async (user, month) => {
  try {
    checkUser(user)
    return await getFilteredByMonthGigs(user, month)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Get all gigs for user filtered by year
export const apiGetYearFilteredGigs = async (user, year) => {
  try {
    checkUser(user)
    return await getFilteredByYearGigs(user, year)
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
export const apiSearchGig = async (
  { artist, choice, dateFrom, dateTo },
  user
) => {
  try {
    let songkickArtist
    const dates = dateFrom && dateTo
    const minDate = dates && `&min_date=${dateFrom}`
    const maxDate = dates && `&max_date=${dateTo}`
    checkUser(user)

    if (choice) {
      const searchArtist = await rp.get(
        `https://api.songkick.com/api/3.0/search/artists.json?apikey=${songkick.apiKey}&query=${artist}`
      )
      const artistId = JSON.parse(searchArtist).resultsPage.results.artist[0].id

      songkickArtist = await rp.get(
        `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${songkick.apiKey}${minDate}${maxDate}`
      )
    } else {
      songkickArtist = await rp.get(
        `https://api.songkick.com/api/3.0/events.json?apikey=${songkick.apiKey}&artist_name=${artist}${minDate}${maxDate}`
      )
    }
    return JSON.parse(songkickArtist).resultsPage.results.event
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
