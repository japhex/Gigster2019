import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import {postCreateGig} from './../../actions/gigs';
import './CreateUpdateGig.scss';
import {connect} from "react-redux"

const CreateUpdateGig = ({gigId, gigs, postCreateGig}) => {
	const [gig, setGig] = useState([]);

	useEffect(() => {
		const gig = gigs.filter(gig => gig.id === parseInt(gigId));

		setGig({gig:gig[0]})
	}, []);

	return (
		<Formik initialValues={gig} onSubmit={(values) => {postCreateGig(values)}}
			render={({ errors, status, touched, isSubmitting }) => (
				<Form>
					<Field type="text" name="band" />
					{errors.band && touched.band && <div>{errors.band}</div>}
					<Field type="date" name="date" />
					{errors.date && touched.date && <div>{errors.date}</div>}
					<Field type="text" name="venue" />
					{errors.venue && touched.venue && <div>{errors.venue}</div>}
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		gigs: state.gigs.gigs
	};
};

export default connect(mapStateToProps, { postCreateGig })(CreateUpdateGig);