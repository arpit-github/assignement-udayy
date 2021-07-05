
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export function AuthRoute({ component: Component, isPrivate, ...rest }) {

	let isAuthenticated = false;
	let username = localStorage.getItem('username');
	let password = localStorage.getItem('password');

	if (username === 'arpit@udayy.com' && password === '123456') {
		isAuthenticated = true;
	}

	let render;

	if (isPrivate) {
		render = props => (
			isAuthenticated ?
				<Component {...props} /> :
				<Redirect to={{ pathname: '/' }} />
		);
	} else {
		render = props => (
			isAuthenticated ?
				<Redirect to={{ pathname: '/' }} /> :
				<Component {...props} />
		);
	}

	return (
		<Route {...rest} render={render} />
	);
}

AuthRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
	location: PropTypes.object
};
