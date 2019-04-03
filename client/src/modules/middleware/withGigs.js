import React, {useEffect} from 'react'
import {fetchGigs, fetchGigsAdditionalDetail} from "modules/gigs/actions/gigs"
import {compose} from 'redux';
import {connect} from "react-redux";

const withGigs = WrappedComponent => (props) => {
	useEffect(() => {
		fetchGigs();
		fetchGigsAdditionalDetail();
	}, []);

	return (
		<WrappedComponent {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		oldGigs: state.gigs.oldGigs,
		newGigs: state.gigs.newGigs,
		gigsStatus: state.gigs.gigsStatus,
		loadingAdditionalContent: state.gigs.loadingAdditionalContent
	};
};

const composedWithGigs = compose(
	connect(mapStateToProps, { fetchGigs, fetchGigsAdditionalDetail }),
	withGigs
)

export default composedWithGigs;