import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Header, H1} from './HeaderStyled';
import {Button, KIND} from 'baseui/button';
import CreateGig from "../../../modules/gigs/pages/CreateGig"
import Plus from 'baseui/icon/plus'
import UserSearch from 'modules/users/components/User/UserSearch'
import UserDetails from "./UserDetails"

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
						<Button kind={KIND.secondary} onClick={(e) => handleAddGig(e)} endEnhancer={() => <Plus size={24} />}>Add gig</Button>
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