import React, { useEffect, useState } from 'react'
import { SpotifyProvider } from './spotifyContext';
import axios from "axios"

const SpotifyProviderWrapper = ({children}) => {
	const [ authenticated, setAuthenticated ] = useState(false)
	const [ user, setUser ] = useState({images: [{url:''}], display_name: ''})
	const [ recentlyPlayed, setRecentlyPlayed ] = useState([])

	useEffect(() => {
		if (authenticated) {
			//TODO: Build middleware for handling requests that don't hit the GraphQL API server
			axios.get('http://localhost:4000/spotify/profile').then(({data}) => {
				setUser(data)
			}).catch(err => {
				// TODO: Handle these properly...
				console.log(err)
			})

			axios.get('http://localhost:4000/spotify/history').then(({data}) => {
				setRecentlyPlayed(data)
			}).catch(err => {
				// TODO: Handle these properly...
				console.log(err)
			})
		}
	}, [authenticated, setUser, setRecentlyPlayed])

	return (
		<SpotifyProvider value={{
			authenticated,
			setAuthenticated,
			user,
			recentlyPlayed,
		}}>
			{children}
		</SpotifyProvider>
	)
}

export default SpotifyProviderWrapper