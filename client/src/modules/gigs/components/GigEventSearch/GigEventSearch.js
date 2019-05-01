import React, {useEffect, useState} from 'react'
import { useDebounce } from 'modules/middleware/hooks/useDebounce'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import './GigEventSearch.scss';

const GigEventSearch = ({fetchEventSearch, searchEvents}) => {
	const [eventArtist, setEventArtist] = useState('');

	const debouncedArtist = useDebounce(eventArtist, 500);

	useEffect(() => {
		if (debouncedArtist) {
			getFetchEventSearch();
		}
	}, [debouncedArtist]);

	async function getFetchEventSearch() {
		await fetchEventSearch({artist: eventArtist});
	}

	return (
		<>
			Search for gig:
			<form>
				<FormControl>
					<InputLabel>Artist name</InputLabel>
					<Input startAdornment={
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					} name="event-artist" onKeyUp={e => setEventArtist(e.target.value)} />
				</FormControl>
			</form>
			{
				(searchEvents.resultsPage !== undefined && searchEvents.resultsPage.totalEntries !== 0) ?
					searchEvents.resultsPage.results.event[0].displayName
				:
					'No results'
			}
		</>
	);
}

export default GigEventSearch;