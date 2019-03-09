import React, {Component} from 'react'
import { Formik, Field, Form } from 'formik';
import {postCreateGig} from './../../actions/gigs';
import './CreateUpdateGig.scss';
import {connect} from "react-redux"

class CreateUpdateGig extends Component {
	state = {
		gig: {}
	}

	componentDidMount() {
		const {gigId, gigs} = this.props;
		const gig = gigs.filter(gig => gig.id === parseInt(gigId));

		this.setState({gig:gig[0]})
	}

	render() {
		const {gig} = this.state;
		const {postCreateGig} = this.props;

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
}

const mapStateToProps = (state) => {
	return {
		gigs: state.gigs.gigs
	};
};

export default connect(mapStateToProps, { postCreateGig })(CreateUpdateGig);