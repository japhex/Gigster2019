import React, {Component} from 'react'
import history from './../../../utils/routing';
import {logout} from 'modules/auth/actions';
import './Header.scss';
import {connect} from "react-redux"

class Header extends Component {
	handleLogout = () => {
		const {logout} = this.props;
		logout();
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

export default connect(mapStateToProps, {logout})(Header);