import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import gigs from './modules/gigs/reducers/gigs';
import users from './modules/users/reducers/users';
import login from './modules/auth/reducers';

export default (history) => combineReducers({
	router: connectRouter(history),
	users,
	gigs,
	login
});