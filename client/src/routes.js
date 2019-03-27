import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GigLayout from './components/layout/GigLayout/GigLayout';
import UsersLayout from './components/layout/UsersLayout/UsersLayout';
import UsersHome from './modules/users/pages/Users';
import UserPage from './modules/users/pages/UserPage';
import GigsHome from './modules/gigs/pages/Gigs';
import CreateGig from './modules/gigs/pages/CreateGig';
import UpdateGig from './modules/gigs/pages/UpdateGig';
import Login from './modules/auth/components/Login';
import Signup from './modules/auth/components/Signup';
import Auth from './utils/auth';
import 'App.scss';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => (
	<Route {...rest} render={props => {
		const newComponent = Layout ? <Layout><Component {...rest} {...props} /></Layout> : <Component {...props} />;

		return Auth.isUserAuthenticated() ? (
			newComponent
		) : (
			<Redirect to={{pathname: '/login', state: { from: props.location }}} />
		)
	}}/>
);

export default (
	<Switch>
		<PrivateRoute exact path="/gigs" component={GigsHome} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/create" component={CreateGig} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/update/:id" component={UpdateGig} layout={GigLayout} />
		<PrivateRoute exact path="/users" component={UsersHome} layout={UsersLayout} />
		<PrivateRoute exact path="/users/:username" component={UserPage} layout={UsersLayout} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={Signup} />
	</Switch>
);