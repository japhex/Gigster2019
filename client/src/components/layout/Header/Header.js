import React from 'react'
import { Link } from 'react-router-dom';
import history from './../../../utils/routing';
import { Query } from "react-apollo";
import {Header} from './HeaderStyled';
import {getLoggedInUser} from "api/users/users"
import QueryHandler from "../../utils/QueryHandler"

const AppHeader = ({logout}) => {
	const handleLogout = () => {
		logout();
		history.push('/login');
	}

	return (
		<Query query={getLoggedInUser}>
			{({ loading, error, data }) => {
				if (loading || error) return (<QueryHandler loading={loading} error={error} />)

				return (
					<Header>
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
					</Header>
				)
			}}
		</Query>
	);
}

export default AppHeader;