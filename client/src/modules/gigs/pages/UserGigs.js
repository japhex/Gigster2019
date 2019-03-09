import React, {Suspense, lazy, Component} from 'react'
import './UserGigs.scss';
import {fetchGigs, fetchGigsAdditionalDetail} from "../actions/gigs"
import {connect} from "react-redux"
const GigList = lazy(() => import('./../components/GigList/GigList'));

class UserGigs extends Component {
	componentDidMount() {
		const {fetchGigs, fetchGigsAdditionalDetail} = this.props;

		// if (gigs.length === 0) {
		fetchGigs();
		fetchGigsAdditionalDetail();
		// }
	}

	render() {
		const {newGigs, oldGigs, gigsStatus} = this.props;

		return (
			<Suspense fallback={`loading...`}>
				<div className="gig-list__container">
					<GigList type="new" title="Upcoming Shows" gigs={newGigs} gigsStatus={gigsStatus} />
					<GigList type="old" title="Past Shows" gigs={oldGigs} gigsStatus={gigsStatus} />
				</div>
			</Suspense>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		oldGigs: state.gigs.oldGigs,
		newGigs: state.gigs.newGigs,
		gigsStatus: state.gigs.gigsStatus
	};
};

export default connect(mapStateToProps, { fetchGigs, fetchGigsAdditionalDetail })(UserGigs);