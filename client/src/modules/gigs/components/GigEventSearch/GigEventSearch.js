import React, {useEffect, useState} from 'react'
import { useDebounce } from 'modules/middleware/hooks/useDebounce'
import './GigEventSearch.scss';

const GigEventSearch = ({fetchEventSearch, searchEvents}) => {
	const [eventArtist, setEventArtist] = useState('');
	const [eventVenue, setEventVenue] = useState('');

	const debouncedArtist = useDebounce(eventArtist, 500);
	const debouncedVenue = useDebounce(eventVenue, 500);

	useEffect(() => {
		if (debouncedArtist || debouncedVenue) {
			getFetchEventSearch();
		}
	}, [debouncedArtist, debouncedVenue]);

	async function getFetchEventSearch() {
		await fetchEventSearch({artist: eventArtist, venue: eventVenue});
	}

	return (
		<>
			Search for gig:
			<form>
				<input type="text" name="event-artist" onKeyUp={e => setEventArtist(e.target.value)} />
				<input type="text" name="event-venue" onKeyUp={e => setEventVenue(e.target.value)} />
			</form>
			{searchEvents.resultsPage !== undefined && searchEvents.resultsPage.results.event[0].displayName}
		</>
	);
}

export default GigEventSearch;