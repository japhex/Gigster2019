import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import './CreateUpdateGig.scss';
import withGigs from 'modules/middleware/withGigs';

const CreateUpdateGig = ({gigId, gigs, createGig, updateGig, fetchArtistSearch, fetchVenueSearch}) => {
	const [gig, setGig] = useState([]);

	useEffect(() => {
		if (gigId !== undefined) {
			const gig = gigs.filter(gig => gig.id === parseInt(gigId));
			setGig(gig[0])
		}
	}, [gigId]);

	const artistOnKeyUp = (event) => {
		const artistSearch = event.target.value;
		const artistResult = fetchArtistSearch(artistSearch);

		console.log(artistResult);
	}

	const venueOnKeyUp = (event) => {
		const venueSearch = event.target.value;
		const venueResult = fetchVenueSearch(venueSearch);

		console.log(venueResult);
	}

	return (
		<Formik enableReinitialize={true} initialValues={gig} onSubmit={(values) => {gig.length === 0 ? createGig(values) : updateGig(values)}}
			render={({ errors, status, touched, isSubmitting }) => (
				<Form>
					<Field type="text" name="band" onKeyUp={artistOnKeyUp} />
					{errors.band && touched.band && <div>{errors.band}</div>}
					<Field type="date" name="date" />
					{errors.date && touched.date && <div>{errors.date}</div>}
					<Field type="text" name="venue" onKeyUp={venueOnKeyUp} />
					{errors.venue && touched.venue && <div>{errors.venue}</div>}
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		/>
	);
}

export default withGigs(CreateUpdateGig);