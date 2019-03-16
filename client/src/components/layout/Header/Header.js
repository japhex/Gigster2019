import React from 'react'
import history from './../../../utils/routing';
import {logout} from 'modules/auth/actions';
import './Header.scss';
import {connect} from "react-redux"

const Header = (props) => {
	const handleLogout = () => {
		const {logout} = props;
		logout();
		history.push('/login');
	}

	const {user} = props;

	return (
		<header>
			<h1>
				<a href="/gigs">Gigster</a>
			</h1>
			<div className="navbar">
				<ul>
					<li>
						<a href="/gigs/create">
							+ Add gig
						</a>
					</li>
					<li>
						<a href="/users">
							Users
						</a>
					</li>
				</ul>
			</div>
			<div>
				<div className="header__user">
					Welcome, <span>{user.username}</span>
				</div>
				<a onClick={handleLogout}>(logout)</a>
			</div>
		</header>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.login.user
	};
};

export default connect(mapStateToProps, {logout})(Header);