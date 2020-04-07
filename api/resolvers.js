import {apiLogin, apiSignup} from "./controllers/auth"
import {apiCreateGig, apiCreateSongkickGig, apiDeleteGig, apiGetGigs, apiSearchGig} from './controllers/gigs'
import {apiGetUserByUsername, apiGetUsers, apiSearchUsersByUsername, apiGetGigsByUser, apiUpdateSpotifyHash} from './controllers/users'
import {apiCreateGigRating} from './controllers/ratings'
import {apiSpotifyLogin, apiSpotifyCallback} from './controllers/spotify/authorize'
import {apiSpotifyPlaylistHistory, apiSpotifyUserProfile} from './controllers/spotify/services'

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
		gigs: (parent, args, { user, res }) => apiGetGigs(user, res),
		spotifyLogin: () => apiSpotifyLogin(),
		spotifyCallback: (parents, {code}, {user}) => apiSpotifyCallback(user, code),
		spotifyPlaylistHistory: () => apiSpotifyPlaylistHistory(),
		spotifyUserProfile: (parents, args, {user}) => apiSpotifyUserProfile(user)
	},
	Mutation: {
		signup: (root, form) => apiSignup(form),
		login: (root, form) => apiLogin(form),
		createGig: (root, gig, { user }) => apiCreateGig(gig, user),
		createSongkickGig: (root, gig, { user }) => apiCreateSongkickGig(gig, user),
		deleteGig: (root, gig, { user }) => apiDeleteGig(gig, user),
		searchGig: (root, artist, { user }) => apiSearchGig(artist, user),
		rateGig: (root, rating, { user }) => apiCreateGigRating(rating, user),
		updateSpotifyHash: (root, {userId, hash}) => apiUpdateSpotifyHash(userId, hash)
	}
};