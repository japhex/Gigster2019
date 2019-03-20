import React from 'react';
import Header from './../Header/Header';
import { connect } from 'react-redux';

const UsersLayout = ({children}) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

export default connect()(UsersLayout);
