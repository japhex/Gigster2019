import {apiLogin, apiSignup} from "./controllers/auth"
import {apiCreateGig, apiCreateSongkickGig, apiDeleteGig, apiGetGigs, apiSearchGig} from './controllers/gigs'
import {apiGetUserByUsername, apiGetUsers, apiSearchUsersByUsername, apiGetGigsByUser} from './controllers/users'

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
		gigs: (parent, args, { user }) => apiGetGigs(user)
	},
	Mutation: {
		signup: (root, form) => apiSignup(form),
		login: (root, form) => apiLogin(form),
		createGig: (root, gig, { user }) => apiCreateGig(gig, user),
		createSongkickGig: (root, gig, { user }) => apiCreateSongkickGig(gig, user),
		deleteGig: (root, gig, { user }) => apiDeleteGig(gig, user),
		searchGig: (root, artist, { user }) => apiSearchGig(artist, user),
	}
};