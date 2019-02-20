import React, {Component} from 'react'
import AuthHelperMethods from './../../../components/AuthHelperMethods';
import withAuth from './../../../components/withAuth';
import history from './../../../utils/routing';
import './Header.scss';

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
					Welcome, {user.username}
					<span onClick={this.handleLogout}>(logout)</span>
				</div>
			</header>
		);
	}
}

export default withAuth(Header);