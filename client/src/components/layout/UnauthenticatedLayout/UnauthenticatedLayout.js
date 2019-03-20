import React from 'react';
import { connect } from 'react-redux';
import './UnauthenticatedLayout.scss';

const UnauthenticatedLayout = ({children}) => {
	return (
		<div className="unauthenticated">
			{children}
		</div>
	);
}

export default connect()(UnauthenticatedLayout);
