import React from 'react'
import { Link } from 'react-router-dom';
import history from './../../../utils/routing';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './Header.scss';

const getUser = gql`
    query loggedInUser {
        loggedInUser {
            username
        }
}`;

const Header = ({logout}) => {
	const handleLogout = () => {
		logout();
		history.push('/login');
	}

	return (
		<Query query={getUser}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading…</p>;
				if (error) return <p>Error :(</p>;

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
								Welcome, <span>{data.loggedInUser.username}</span>
							</div>
							<span onClick={handleLogout}>(logout)</span>
						</div>
					</header>
				)
			}}
		</Query>
	);
}

export default Header;