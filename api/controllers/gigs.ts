import { songkick } from '../config/songkick'
import { Gig } from '../models/gig'
import { UserGigs } from '../models/user-gigs'

import {
  checkUser,
  getFilteredByFestivalGigs,
  getFilteredByMonthGigs,
  getFilteredByYearGigs,
  getUserGigs,
} from './utils'

const rp = require('request-promise')

// Get all gigs for user
export const apiGetGigs = async user => {
  try {
    checkUser(user)
    return await getUserGigs(user)
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Get all gigs for user filtered by type=Festival
export const apiGetFestivalFilteredGigs = async user => {
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
export const apiCreateGig = async () => {
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
export const apiCreateSongkickGig = async ({ songkickJson }, user) => {
  try {
    checkUser(user)
    let gigExists = false
    const existingGigs = await getUserGigs(user, false)

    await existingGigs.forEach(gig => {
      if (gig.songKickGig.id === songkickJson.id) {
        gigExists = true
      }
    })

    if (gigExists) return existingGigs

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
export const apiSearchGig = async ({ artist, past = false, dateFrom, dateTo }, user) => {
  try {
    const range = dateFrom && dateTo && `${dateFrom},${dateTo}`
    checkUser(user)

    return await rp.get(
      `https://rest.bandsintown.com/artists/${artist}/events?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c${
        past && '&date=past'
      }${range && range}`
    )
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
