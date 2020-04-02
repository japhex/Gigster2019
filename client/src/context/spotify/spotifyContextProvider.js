import React, { useEffect, useState } from 'react'
import { SpotifyProvider } from './spotifyContext';
import axios from "axios"

const SpotifyProviderWrapper = ({children}) => {
	const [ authenticated, setAuthenticated ] = useState(false)
	const [ user, setUser ] = useState({images: [{url:''}], display_name: ''})
	const [ recentlyPlayed, setRecentlyPlayed ] = useState([])

	useEffect(() => {
		if (authenticated) {
			axios.get('http://localhost:4000/spotify/profile').then(({data}) => {
				setUser(data)
			}).catch(err => {
				console.log(err)
			})

			axios.get('http://localhost:4000/spotify/history').then(({data}) => {
				setRecentlyPlayed(data)
			}).catch(err => {
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