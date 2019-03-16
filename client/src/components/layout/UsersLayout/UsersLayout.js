import React, { Component } from 'react';
import Header from './../Header/Header';
import { connect } from 'react-redux';

class UsersLayout extends Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default connect()(UsersLayout);
