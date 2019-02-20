import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UnauthenticatedLayout.scss';

class UnauthenticatedLayout extends Component {
	render() {
		return (
			<div className="unauthenticated">
				{this.props.children}
			</div>
		);
	}
}

export default connect()(UnauthenticatedLayout);
