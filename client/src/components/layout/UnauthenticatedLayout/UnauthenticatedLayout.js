import React from 'react';
import './UnauthenticatedLayout.scss';

const UnauthenticatedLayout = ({children}) => (
	<div className="unauthenticated">
		{children}
	</div>
);

export default UnauthenticatedLayout;