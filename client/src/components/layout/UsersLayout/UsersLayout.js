import React from 'react';
import Header from './../Header/Header';
import './UsersLayout.scss';

const UsersLayout = ({children}) => {
	return (
		<div>
			<Header />
			<div className="layout-users">
				{children}
			</div>
		</div>
	);
}

export default UsersLayout;
