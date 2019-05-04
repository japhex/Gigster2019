import React, {useEffect} from 'react'
import {fetchGigs, fetchGigsAdditionalDetail, createGig, updateGig, deleteGig} from "modules/gigs/actions/gigs"
import {fetchArtistSearch, fetchVenueSearch, fetchEventSearch} from "modules/gigs/actions/search"
import {compose} from 'redux';
import {connect} from "react-redux";

const withGigs = WrappedComponent => (props) => {
	useEffect(() => {
		// props.fetchGigs();
		// props.fetchGigsAdditionalDetail();
	}, []);

	return (
		<WrappedComponent {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		gigs: state.gigs.collection,
		oldGigs: state.gigs.oldGigs,
		newGigs: state.gigs.newGigs,
		gigsStatus: state.gigs.gigsStatus,
		loadingAdditionalContent: state.gigs.loadingAdditionalContent,
		searchArtists: state.search.artists,
		searchVenues: state.search.venues,
		searchEvents: state.search.events
	};
};

const composedWithGigs = compose(
	connect(mapStateToProps, { fetchGigs, fetchGigsAdditionalDetail, createGig, updateGig, deleteGig, fetchArtistSearch, fetchVenueSearch, fetchEventSearch }),
	withGigs
)

export default composedWithGigs;