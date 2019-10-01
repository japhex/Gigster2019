import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Header, H1} from './HeaderStyled';
import CreateGig from "../../../modules/gigs/pages/CreateGig"
import UserSearch from 'modules/users/components/User/UserSearch'
import UserDetails from "./UserDetails"
import {Button} from 'japhex-ui'

const AppHeader = () => {
	const [addGigActive, setAddGigActive] = useState(false)

	const handleAddGig = (e) => {
		e.preventDefault()
		setAddGigActive(!addGigActive);
	}

	return (
		<Header>
			<H1>
				<Link to="/gigs">Gigster</Link>
			</H1>
			<div className="navbar">
				<ul>
					<li>
						<Button onClick={(e) => handleAddGig(e)}>Add gig</Button>
						<CreateGig addMode={addGigActive} callback={(e) => handleAddGig(e)} />
					</li>
					<li>
						<UserSearch />
					</li>
				</ul>
			</div>
			<UserDetails />
		</Header>
	);
}

export default AppHeader;