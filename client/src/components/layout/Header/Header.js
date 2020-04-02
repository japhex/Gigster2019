import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {Header, H1, Navbar} from './HeaderStyled';
import Create from "../../gigs/pages/create"
import Search from 'components/users/user/search'
import UserDetails from "./UserDetails"
import SpotifyContext from "../../../context/spotify/spotifyContext"

const urlParams = new URLSearchParams(window.location.search);
const isUserAuthorized = urlParams.has('authorized')

const AppHeader = () => {
	const spotifyContext = useContext(SpotifyContext)
	const [ addGigActive, setAddGigActive ] = useState(false)
	const { authenticated, setAuthenticated, user } = spotifyContext

	const handleAddGig = (e) => {
		e.preventDefault()
		setAddGigActive(!addGigActive);
	}

	console.log(user)

	useEffect(() => {
		setAuthenticated(isUserAuthorized)
	}, [setAuthenticated, isUserAuthorized])

	return (
		<Header>
			<H1>
				<Link to="/">Gigster</Link>
			</H1>
			<Navbar>
				<ul>
					<li>
						<Link to="/gigs/upcoming">Upcoming gigs</Link>
					</li>
					<li>
						<Link to="/gigs/past">Past gigs</Link>
					</li>
					<li>
						<a href='#' onClick={(e) => handleAddGig(e)}>Add gig</a>
					</li>
				</ul>
				{authenticated ?
					<img src={user.images[0].url} />
					:
					<a href="http://localhost:4000/spotify/login">Connect your Spotify account</a>
				}
				<Create addMode={addGigActive} handleCloseClick={(e) => handleAddGig(e)} />
				{/*<Search />*/}
			</Navbar>
			<UserDetails />
		</Header>
	);
}

export default AppHeader;