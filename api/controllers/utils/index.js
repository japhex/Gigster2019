import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'
import parseIso from 'date-fns/parseIso'

import { Gig } from '../../models/Gig'
import { UserGigs } from '../../models/user_gigs'

export const checkUser = (user) => {
  if (!user) {
    throw new Error('You are not authenticated!')
  }
}

export const getUserGigs = async (user) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map((gig) => gig.gig) },
  }).sort('songKickGig.start.date')

  return await splitGigs(userGigs, gigs)
}

export const getUserWithGigs = async (user) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map((gig) => gig.gig) },
  }).sort('songKickGig.start.date')

  return {
    id: user._id,
    username: user.username,
    gigs: await splitGigs(userGigs, gigs),
  }
}

export const getFilteredByFestivalGigs = async (user) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map((gig) => gig.gig) },
    'songKickGig.type': 'Festival',
  }).sort('songKickGig.start.date')

  return await splitGigs(userGigs, gigs)
}

export const getFilteredByMonthGigs = async (user, filteredMonth) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map((gig) => gig.gig) },
  }).sort('songKickGig.start.date')

  const gigsFormatted = filterMonths(filteredMonth, gigs)
  return await splitGigs(userGigs, gigsFormatted)
}

export const getFilteredByYearGigs = async (user, filteredYear) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map((gig) => gig.gig) },
  }).sort('songKickGig.start.date')

  const gigsFormatted = filterYears(filteredYear, gigs)
  return await splitGigs(userGigs, gigsFormatted)
}

export const splitGigs = (userGigs, gigs) => {
  gigs.map((gig) => {
    userGigs.map((userGig) => {
      if (userGig.gig == gig.id) {
        gig.songKickGig.rating = userGig.rating
      }
    })
  })

  const oldGigs = gigs.filter(
    (gig) => Date.parse(gig.songKickGig.start.date) < Date.now()
  )
  const newGigs = gigs.filter(
    (gig) => Date.parse(gig.songKickGig.start.date) > Date.now()
  )

  return { oldGigs, newGigs }
}

export const filterMonths = (month, gigs) => {
  return gigs.filter((gig) => {
    const date = parseIso(gig.songKickGig.start.date)
    return getMonth(new Date(date)) === month
  })
}

export const filterYears = (year, gigs) => {
  return gigs.filter((gig) => {
    const date = parseIso(gig.songKickGig.start.date)
    return getYear(new Date(date)) === year
  })
}
