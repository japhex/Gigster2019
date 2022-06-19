import { Gig } from '../models/gig'
import { UserGigs } from '../models/user-gigs'
import axios from 'axios'

import { checkUser, getFilteredByFestivalGigs, getFilteredByMonthGigs, getFilteredByYearGigs } from './utils'
import { formatBandsInTownGigData } from './utils/format'

// Get all gigs for user
export const apiGetGigs = async user => {
  try {
    checkUser(user)
    return await Gig.find({
      userId: user.id,
    }).sort('date')
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
export const apiCreateGig = async (gig, user) => {
  try {
    checkUser(user)

    return await Gig.create({ ...gig, userId: user.id })
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Delete gig
export const apiDeleteGig = async ({ id }, user) => {
  try {
    checkUser(user)
    await UserGigs.deleteOne({ user: user.id, gig: id })

    return { success: true }
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// Search artist
export const apiSearchArtist = async ({ artist, past = false, dateFrom, dateTo }, user) => {
  console.log(past)
  try {
    const range = dateFrom && dateTo && `${dateFrom},${dateTo}`
    checkUser(user)

    const { data } = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/attractions?apikey=4xAPPvdUgBGuLNsQOhk3SiohA5iNgHeo&keyword=${artist}&locale=*`
    )

    return data
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

export const apiSearchGigBandsInTown = async ({ artist, date = 'upcoming' }, user) => {
  try {
    checkUser(user)

    const { data } = await axios.get(
      `https://rest.bandsintown.com/artists/${artist}/events?app_id=98d36afbb31d5dd4f2c62850e939ca61&date=${date}`
    )
    const apiArtist = {
      name: data[0].artist.name,
      image: data[0].artist.image_url,
    }

    return data.map(event => formatBandsInTownGigData(apiArtist, event))
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

export const apiSearchGigTicketmaster = async ({ artist, past = false, dateFrom, dateTo }, user) => {
  console.log(past)
  try {
    const range = dateFrom && dateTo && `${dateFrom},${dateTo}`
    checkUser(user)

    const { data } = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=4xAPPvdUgBGuLNsQOhk3SiohA5iNgHeo&locale=*&keyword=${artist}`
    )

    // event
    console.log(data._embedded.events[0])
    // venue
    console.log(data._embedded.events[0]._embedded.venues)
    // support
    console.log(data._embedded.events[0]._embedded.attractions)
    // festival (if end exists)
    console.log(data?._embedded?.events[0]?.dates?.start?.localDate)
    console.log(data?._embedded?.events[0]?.dates?.end?.localDate)

    return data
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

// bandsintown api key
// 98d36afbb31d5dd4f2c62850e939ca61
