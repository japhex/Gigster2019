import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GigLayout from './components/layout/GigLayout/GigLayout';
import UsersLayout from './components/layout/UsersLayout/UsersLayout';
import UsersHome from './modules/users/pages/Users';
import UserPage from './modules/users/pages/UserPage';
import GigsHome from './modules/gigs/pages/Gigs';
import CreateGig from './modules/gigs/pages/CreateGig';
import UpdateGig from './modules/gigs/pages/UpdateGig';
import Login from './modules/auth/components/Login';
import Signup from './modules/auth/components/Signup';
import { PrivateRoute } from './utils/auth';
import 'App.scss';

export default (
	<Switch>
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={Signup} />
		<PrivateRoute exact path="/" component={GigsHome} layout={GigLayout} />
		<PrivateRoute exact path="/gigs" component={GigsHome} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/create" component={CreateGig} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/update/:id" component={UpdateGig} layout={GigLayout} />
		<PrivateRoute exact path="/users" component={UsersHome} layout={UsersLayout} />
		<PrivateRoute exact path="/users/:username" component={UserPage} layout={UsersLayout} />
	</Switch>
);