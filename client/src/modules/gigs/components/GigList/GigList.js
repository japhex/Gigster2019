import React, {Component} from 'react'
import {connect} from "react-redux"
import {fetchGigs, fetchGigsAdditionalDetail} from "../../actions/gigs";
import Gig from '../Gig/Gig';
import './GigList.scss';

class GigList extends Component {
	componentDidMount() {
		const {fetchGigs, fetchGigsAdditionalDetail} = this.props;

		// if (gigs.length === 0) {
			fetchGigs();
			fetchGigsAdditionalDetail();
		// }
	}

	render() {
		const {oldGigs, newGigs, gigsStatus, type, title} = this.props;
		const displayType = type === 'new' ? newGigs : oldGigs;

		return (
			<div className={`gig__list gig__list--${type}`}>
				{gigsStatus === ""
					?
						<>
							<h1>{title}</h1>
							<ul>
								{displayType.map(gig =>
									<Gig key={gig.id} gig={gig} type={type} />
								)}
							</ul>
						</>
					:
						<p>Unable to retrieve gigs.</p>
				}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		gigs: state.gigs.gigs,
		oldGigs: state.gigs.oldGigs,
		newGigs: state.gigs.newGigs,
		gigsStatus: state.gigs.gigsStatus
	};
};

export default connect(mapStateToProps, { fetchGigs, fetchGigsAdditionalDetail })(GigList);