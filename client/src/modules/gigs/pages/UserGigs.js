import React, {Suspense, lazy, useEffect} from 'react'
import './UserGigs.scss';
import {fetchGigs, fetchGigsAdditionalDetail} from "../actions/gigs"
import {connect} from "react-redux"
import Loader from 'components/utils/Loader';
const GigList = lazy(() => import('./../components/GigList/GigList'));

const UserGigs = ({newGigs, oldGigs, gigsStatus, fetchGigs, fetchGigsAdditionalDetail}) => {
	useEffect(() => {
		fetchGigs();
		fetchGigsAdditionalDetail();
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<div className="gig-list__container">
				<GigList type="new" title="Upcoming Shows" gigs={newGigs} gigsStatus={gigsStatus} />
				<GigList type="old" title="Past Shows" gigs={oldGigs} gigsStatus={gigsStatus} />
			</div>
		</Suspense>
	);
}

const mapStateToProps = (state) => {
	return {
		oldGigs: state.gigs.oldGigs,
		newGigs: state.gigs.newGigs,
		gigsStatus: state.gigs.gigsStatus
	};
};

export default connect(mapStateToProps, { fetchGigs, fetchGigsAdditionalDetail })(UserGigs);