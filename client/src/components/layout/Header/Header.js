import React from 'react'
import { Link } from 'react-router-dom';
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
				<Link to="/gigs">Gigster</Link>
			</h1>
			<div className="navbar">
				<ul>
					<li>
						<Link to="/gigs/create">
							+ Add gig
						</Link>
					</li>
					<li>
						<Link to="/users">
							Users
						</Link>
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