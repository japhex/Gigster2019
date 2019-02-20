import React, {Component} from 'react'
import AuthHelperMethods from './../../../components/AuthHelperMethods';
import history from './../../../utils/routing';
import './Header.scss';
import {connect} from "react-redux"

class Header extends Component {
	Auth = new AuthHelperMethods();

	handleLogout = () => {
		this.Auth.logout()
		history.push('/login');
	}

	render() {
		const {user} = this.props;

		return (
			<header>
				<h1>Gigster</h1>
				<div>
					Welcome, <span>{user.username}</span>
					<span onClick={this.handleLogout}>(logout)</span>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.login.user
	};
};

export default connect(mapStateToProps, {})(Header);