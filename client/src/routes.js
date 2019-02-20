import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GigLayout from './components/layout/GigLayout/GigLayout';
import GigList from './modules/gigs/components/GigList/GigList';
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
		<PrivateRoute exact path="/gigs" component={GigList} layout={GigLayout} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={Signup} />
	</Switch>
);