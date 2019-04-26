import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import _ from 'lodash';
import withGigs from 'modules/middleware/withGigs';
import GigEventSearch from 'modules/gigs/components/GigEventSearch/GigEventSearch';
import './CreateUpdateGig.scss';

const CreateUpdateGig = ({gigId, gigs, createGig, updateGig, fetchArtistSearch, fetchVenueSearch,  fetchEventSearch, searchArtists, searchVenues, searchEvents}) => {
	const [gig, setGig] = useState([]);

	useEffect(() => {
		if (gigId !== undefined) {
			const gig = gigs.filter(gig => gig.id === parseInt(gigId));
			setGig(gig[0])
		}
	}, [gigId]);

	const handleKeyUp = (event) => {
		const key = event.key;
		const keyCodePressed = event.keyCode;
		const searchTerm = event.target.value;
		const searchType = event.target.name;
		const regex = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

		keyUpSearch(key, keyCodePressed, searchTerm, searchType, regex);
	}

	const keyUpSearch = _.debounce(async (key, keyCodePressed, searchTerm, searchType, regex) => {
		 if (regex.test(key) || keyCodePressed === 8) {
			if (searchType === 'artist') {
				await fetchArtistSearch(searchTerm);
			} else if (searchType === 'venue') {
				await fetchVenueSearch(searchTerm);
			}
		}
	}, 1000);

	return (
		<Formik enableReinitialize={true} initialValues={gig} onSubmit={(values) => {gig.length === 0 ? createGig(values) : updateGig(values)}}
			render={({ errors, status, touched, isSubmitting }) => (
				<>
					<GigEventSearch fetchEventSearch={fetchEventSearch} searchEvents={searchEvents} />
					Add gig manually:
					<Form>
						<Field type="text" name="artist" onKeyUp={handleKeyUp} />
						{errors.artist && touched.artist && <div>{errors.artist}</div>}
						<Field type="date" name="date" />
						{errors.date && touched.date && <div>{errors.date}</div>}
						<Field type="text" name="venue" onKeyUp={handleKeyUp} />
						{errors.venue && touched.venue && <div>{errors.venue}</div>}
						<button type="submit" disabled={isSubmitting}>
							{gig.length === 0 ? 'Create' : 'Update'}
						</button>
						{searchArtists.resultsPage !== undefined && searchArtists.resultsPage.results.artist[0].displayName}
						{searchVenues.resultsPage !== undefined && searchVenues.resultsPage.results.venue[0].displayName}
					</Form>
				</>
			)}
		/>
	);
}

export default withGigs(CreateUpdateGig);