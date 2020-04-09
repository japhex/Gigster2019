import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';

export const isUserAuthenticated = () => {
	const token = localStorage.getItem('token');

	if (!token) return false;

	const decodedToken = jwt.decode(token);
	const expiryDate = new Date(decodedToken.exp * 1000);

	if (expiryDate && (Date.now() <= expiryDate)) {
		return true;
	}

	localStorage.removeItem('token');
	return false;
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

export const setUserToken = (token, history) => {
	if (token !== undefined) {
		localStorage.setItem('token', token);
		history.push(`/gigs/upcoming`)
	}
}

export const logoutUser = (history) => {
	localStorage.removeItem('token');
	return history.push(`/login`)
}