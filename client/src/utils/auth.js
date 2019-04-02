import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';
import { getStore } from './redux/store';

const isUserAuthenticated = async () => {
	const state = getStore().getState();
	const token = state.login.user.token;

	if (!token) return false;

	const decodedToken = jwt.decode(token);
	const expiryDate = new Date(decodedToken.exp * 1000);

	if (expiryDate && (Date.now() <= expiryDate)) {
		return true;
	}

	return true;
}

export const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => (
	<Route {...rest} render={props => {
		const newComponent = Layout ? <Layout><Component {...rest} {...props} /></Layout> : <Component {...props} />;

		return isUserAuthenticated() ? (
			newComponent
		) : (
			<Redirect to={{pathname: '/login', state: { from: props.location }}} />
		)
	}}/>
);