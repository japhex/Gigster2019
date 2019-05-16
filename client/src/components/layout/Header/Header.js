import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import history from './../../../utils/routing';
import { Query } from "react-apollo";
import {Header} from './HeaderStyled';
import {Button, KIND} from 'baseui/button';
import {getLoggedInUser} from "api/users/users"
import QueryHandler from "../../utils/QueryHandler"
import CreateGig from "../../../modules/gigs/pages/CreateGig"

const AppHeader = ({logout}) => {
	const [addGigActive, setAddGigActive] = useState(false)

	const handleLogout = () => {
		logout();
		history.push('/login');
	}

	const handleAddGig = (e) => {
		e.preventDefault()
		setAddGigActive(!addGigActive);
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
									<Button kind={KIND.minimal} onClick={(e) => handleAddGig(e)}>+ Add gig</Button>
									<CreateGig addMode={addGigActive} callback={(e) => handleAddGig(e)} />
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