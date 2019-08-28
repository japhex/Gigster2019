import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import history from './../../../utils/routing';
import { Query } from "react-apollo";
import {Header, H1, UserDetails, Divider, StyledHandIcon} from './HeaderStyled';
import {Button, KIND} from 'baseui/button';
import {getLoggedInUser} from "api/users/users"
import QueryHandler from "../../utils/QueryHandler"
import CreateGig from "../../../modules/gigs/pages/CreateGig"
import Plus from 'baseui/icon/plus'
import UserSearch from 'modules/users/components/User/UserSearch'

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
						<H1>
							<Link to="/gigs">Gigster</Link>
						</H1>
						<div className="navbar">
							<ul>
								<li>
									<Button kind={KIND.secondary} onClick={(e) => handleAddGig(e)} endEnhancer={() => <Plus size={24} />}>Add gig</Button>
									<CreateGig addMode={addGigActive} callback={(e) => handleAddGig(e)} />
								</li>
								<li>
									<UserSearch />
								</li>
							</ul>
						</div>
						<UserDetails>
							<StyledHandIcon />
							<span>{data.loggedInUser.username}</span>
							<Divider>|</Divider>
							<span onClick={handleLogout}>logout</span>
						</UserDetails>
					</Header>
				)
			}}
		</Query>
	);
}

export default AppHeader;