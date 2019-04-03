import React, {Suspense, lazy, useEffect} from 'react'
import './UserGigs.scss';
import Loader from 'components/utils/Loader';
import withGigs from 'modules/middleware/withGigs';
const GigList = lazy(() => import('./../components/GigList/GigList'));

const UserGigs = ({newGigs, oldGigs, gigsStatus, fetchGigs, fetchGigsAdditionalDetail, loadingAdditionalContent}) => {
	useEffect(() => {
		fetchGigs();
		fetchGigsAdditionalDetail();
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<div className="gig-list__container">
				<GigList type="new" title="Upcoming Shows" gigs={newGigs} gigsStatus={gigsStatus} loadingAdditionalContent={loadingAdditionalContent} />
				<GigList type="old" title="Past Shows" gigs={oldGigs} gigsStatus={gigsStatus} loadingAdditionalContent={loadingAdditionalContent} />
			</div>
		</Suspense>
	);
}

export default withGigs(UserGigs);