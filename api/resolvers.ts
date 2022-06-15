import { apiLogin, apiSignup } from './controllers/auth'
import {
  apiCreateGig,
  apiCreateSongkickGig,
  apiDeleteGig,
  apiGetFestivalFilteredGigs,
  apiGetGigs,
  apiGetMonthFilteredGigs,
  apiGetYearFilteredGigs,
  apiSearchGig,
} from './controllers/gigs'
import { apiCreateGigRating } from './controllers/ratings'
import { apiGetUserByUsername, apiGetUsers, apiSearchUsersByUsername, apiGetGigsByUser } from './controllers/users'

export default {
  User: {
    gigs: parent => parent.getGigs(),
  },
  Query: {
    users: () => apiGetUsers(),
    loggedInUser: (_parent, _args, { user }) => user,
    user: (_parent, { username }) => apiGetUserByUsername(username),
    userGigs: (_parent, { userId }) => apiGetGigsByUser(userId),
    searchUsers: (_parent, { username }) => apiSearchUsersByUsername(username),
    searchGig: (_parent, artist, { user }) => apiSearchGig(artist, user),
    gigs: (_parent, _args, { user }) => apiGetGigs(user),
    gigsUnfiltered: (_parent, _args, { user }) => apiGetGigs(user),
    gigsFestivalFilter: (_parent, _args, { user }) => apiGetFestivalFilteredGigs(user),
    gigsMonthFilter: (_parent, { month }, { user }) => apiGetMonthFilteredGigs(user, month),
    gigsYearFilter: (_parent, { year }, { user }) => apiGetYearFilteredGigs(user, year),
  },
  Mutation: {
    signup: (_parent, form) => apiSignup(form),
    login: (_parent, form) => apiLogin(form),
    createGig: (_parent, _gig) => apiCreateGig(),
    createSongkickGig: (_parent, gig, { user }) => apiCreateSongkickGig(gig, user),
    deleteGig: (_parent, gig, { user }) => apiDeleteGig(gig, user),
    rateGig: (_parent, rating, { user }) => apiCreateGigRating(rating, user),
  },
}
