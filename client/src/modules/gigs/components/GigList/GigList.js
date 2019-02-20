import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {fetchGigs} from "../../actions/gigs";
import Gig from '../Gig/Gig';
import './GigList.scss';

class GigList extends Component {
	componentDidMount() {
		const {fetchGigs} = this.props;
		fetchGigs();
	}

	render() {
		const {gigs} = this.props;

		return (
			<Fragment>
				<p>You're going to:</p>
				<ul className="gig__list">
					{gigs.map(gig =>
						<Gig key={gig.id} gig={gig} />
					)}
				</ul>
			</Fragment>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		gigs: state.gigs.gigs
	};
};

export default connect(mapStateToProps, { fetchGigs })(GigList);