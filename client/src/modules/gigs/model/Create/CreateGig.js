import React, {Component} from 'react'
import { Formik, Field, Form } from 'formik';
import {postCreateGig} from './../../actions/gigs';
import './CreateGig.scss';
import {connect} from "react-redux"

class CreateGig extends Component {
	render() {
		const {gig, postCreateGig} = this.props;

		return (
			<Formik initialValues={gig} onSubmit={(values) => {
					postCreateGig(values);
				}}
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
}

export default connect(null, { postCreateGig })(CreateGig);