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
import {
  apiSpotifyLogin,
  apiSpotifyCallback,
} from './controllers/spotify/authorize'
import {
  apiSpotifyPlaylistHistory,
  apiSpotifyUserProfile,
} from './controllers/spotify/services'
import {
  apiGetUserByUsername,
  apiGetUsers,
  apiSearchUsersByUsername,
  apiGetGigsByUser,
  apiUpdateSpotifyHash,
} from './controllers/users'

export default {
  User: {
    gigs: (parent) => parent.getGigs(),
  },
  Query: {
    users: () => apiGetUsers(),
    loggedInUser: (parent, args, { user }) => user,
    user: (parent, { username }) => apiGetUserByUsername(username),
    userGigs: (parent, { userId }) => apiGetGigsByUser(userId),
    searchUsers: (parent, { username }) => apiSearchUsersByUsername(username),
    searchGig: (root, artist, { user }) => apiSearchGig(artist, user),
    gigs: (parent, args, { user, res }) => apiGetGigs(user, res),
    gigsUnfiltered: (parent, args, { user, res }) => apiGetGigs(user, res),
    gigsFestivalFilter: (parent, args, { user, res }) =>
      apiGetFestivalFilteredGigs(user, res),
    gigsMonthFilter: (parent, { month }, { user, res }) =>
      apiGetMonthFilteredGigs(user, month, res),
    gigsYearFilter: (parent, { year }, { user, res }) =>
      apiGetYearFilteredGigs(user, year, res),
    spotifyLogin: () => apiSpotifyLogin(),
    spotifyCallback: (parents, { code }, { user }) =>
      apiSpotifyCallback(user, code),
    spotifyPlaylistHistory: () => apiSpotifyPlaylistHistory(),
    spotifyUserProfile: (parents, args, { user }) =>
      apiSpotifyUserProfile(user),
  },
  Mutation: {
    signup: (root, form) => apiSignup(form),
    login: (root, form) => apiLogin(form),
    createGig: (root, gig, { user }) => apiCreateGig(gig, user),
    createSongkickGig: (root, gig, { user }) => apiCreateSongkickGig(gig, user),
    deleteGig: (root, gig, { user }) => apiDeleteGig(gig, user),
    rateGig: (root, rating, { user }) => apiCreateGigRating(rating, user),
    updateSpotifyHash: (root, { userId, hash }) =>
      apiUpdateSpotifyHash(userId, hash),
  },
}
