import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'
import parseIso from 'date-fns/parseISO'

import { Gig } from '../../models/gig'
import { UserGigs } from '../../models/user-gigs'

export const checkUser = user => {
  if (!user) {
    throw new Error('You are not authenticated!')
  }
}

export const returnGigs = async (user, options = {}) => {
  const userGigs = await UserGigs.find({ user: user.id })
  const gigs = await Gig.find({
    _id: { $in: userGigs.map(gig => gig.gig) },
    ...options,
  }).sort('date')

  return { userGigs, gigs }
}

export const getUserWithGigs = async user => {
  const { gigs } = await returnGigs(user)

  return {
    id: user._id,
    username: user.username,
    gigs,
  }
}

export const getFilteredByFestivalGigs = async user => {
  return await returnGigs(user, {
    'songKickGig.type': 'Festival',
  })
}

export const getFilteredByMonthGigs = async (user, filteredMonth) => {
  const { gigs } = await returnGigs(user)
  return filterMonths(filteredMonth, gigs)
}

export const getFilteredByYearGigs = async (user, filteredYear) => {
  const { gigs } = await returnGigs(user)
  return filterYears(filteredYear, gigs)
}

export const filterMonths = (month, gigs) => {
  return gigs.filter(gig => {
    const date = parseIso(gig.songKickGig.start.date)
    return getMonth(new Date(date)) === month
  })
}

export const filterYears = (year, gigs) => {
  return gigs.filter(gig => {
    const date = parseIso(gig.songKickGig.start.date)
    return getYear(new Date(date)) === year
  })
}
