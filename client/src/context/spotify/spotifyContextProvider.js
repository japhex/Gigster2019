import React, { useEffect, useState } from 'react'
import { SpotifyProvider } from './spotifyContext';
import {useQuery} from "@apollo/react-hooks"
import {getSpotifyUserProfile} from "../../api/spotify/spotify"
import QueryHandler from "../../components/utils/queryHandler"
import {isUserAuthenticated} from "../../utils/auth"

const SpotifyProviderWrapper = ({children}) => {
	const [ authenticated, setAuthenticated ] = useState(false)
	const [ user, setUser ] = useState({images: [{url:''}], display_name: ''})
	const [ recentlyPlayed, setRecentlyPlayed ] = useState([])
	const { loading, error, data } = useQuery(getSpotifyUserProfile)

	useEffect(() => {
		if (isUserAuthenticated()) {
			if (data.spotifyUserProfile && data.spotifyUserProfile.user !== null) {
				setUser(data.spotifyUserProfile.user)
				setAuthenticated(true)
			} else {
				setAuthenticated(false)
			}
		}
	}, [data, setUser, setAuthenticated])

	// if (loading || error) return (<QueryHandler loading={loading} error={error} />)

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