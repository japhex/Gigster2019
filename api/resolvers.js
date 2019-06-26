import {apiLogin, apiSignup} from "./controllers/auth"
import {apiCreateGig, apiCreateSongkickGig, apiDeleteGig, apiGetGigs, apiUpdateGig, apiSearchGig} from './controllers/gigs'
import {apiGetUserByUsername, apiGetUsers, apiSearchUsersByUsername} from './controllers/users'

export default {
	User: {
		gigs: (parent) => parent.getGigs(),
	},
	Query: {
		users: () => apiGetUsers(),
		loggedInUser: (parent, args, { user }) => user,
		user: (parent, { username }) => apiGetUserByUsername(username),
		searchUsers: (parent, { username }) => apiSearchUsersByUsername(username),
		gigs: (parent, args, { user }) => apiGetGigs(user)
	},
	Mutation: {
		signup: (root, form) => apiSignup(form),
		login: (root, form) => apiLogin(form),
		createGig: (root, gig, { user }) => apiCreateGig(gig, user),
		createSongkickGig: (root, gig, { user }) => apiCreateSongkickGig(gig, user),
		updateGig: (root, gig, { user }) => apiUpdateGig(gig, user),
		deleteGig: (root, gig, { user }) => apiDeleteGig(gig, user),
		searchGig: (root, gig, { user }) => apiSearchGig(gig, user),
	}
};