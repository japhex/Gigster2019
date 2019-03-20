import React from 'react'

function GigList(props) {
	const {digit, message} = props;

	return (
		<div className="user-stats__box">
			<h1>{digit}</h1>
			<small>{message}</small>
		</div>
	);
}

export default GigList;