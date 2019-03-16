import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GigLayout from './components/layout/GigLayout/GigLayout';
import UsersLayout from './components/layout/UsersLayout/UsersLayout';
import Users from './modules/users/pages/Users';
import Gigs from './modules/gigs/pages/Gigs';
import CreateGig from './modules/gigs/pages/CreateGig';
import UpdateGig from './modules/gigs/pages/UpdateGig';
import Login from './modules/auth/components/login';
import Signup from './signup';
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
		<PrivateRoute exact path="/gigs" component={Gigs} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/create" component={CreateGig} layout={GigLayout} />
		<PrivateRoute exact path="/gigs/update/:id" component={UpdateGig} layout={GigLayout} />
		<PrivateRoute exact path="/users" component={Users} layout={UsersLayout} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={Signup} />
	</Switch>
);