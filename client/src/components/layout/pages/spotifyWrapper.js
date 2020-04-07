import React from 'react';
import {useQuery} from "@apollo/react-hooks"
import {getSpotifyCallback} from "../../../api/spotify/spotify"

const search = window.location.search;
const params = new URLSearchParams(search);
const code = params.get('code');

const SpotifyWrapper = () => {
	const { data } = useQuery(getSpotifyCallback, {variables:{code}})

	return (
		<div>
			test
		</div>
	);
}

export default SpotifyWrapper;
