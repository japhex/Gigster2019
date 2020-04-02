import React, {useContext, useEffect, useState} from 'react'
import SpotifyContext from "../../../context/spotify/spotifyContext"
import { User, Username, SpotifyUnauthorised } from './styled/SpotifyUserStyled'

const urlParams = new URLSearchParams(window.location.search);
const isUserAuthorized = urlParams.has('authorized')

const SpotifyUser = () => {
	const spotifyContext = useContext(SpotifyContext)
	const { authenticated, setAuthenticated, user } = spotifyContext

	useEffect(() => {
		setAuthenticated(isUserAuthorized)
	}, [setAuthenticated, isUserAuthorized])

	return (
		<User>
			<img height="20" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" />
			{authenticated ?
				<>
					<Username>{user.display_name}</Username>
					<img src={user.images[0].url} />
				</>
				:
				<SpotifyUnauthorised>
					<a href="http://localhost:4000/spotify/login">Connect your Spotify account</a>
				</SpotifyUnauthorised>
			}
		</User>
	);
}

export default SpotifyUser;