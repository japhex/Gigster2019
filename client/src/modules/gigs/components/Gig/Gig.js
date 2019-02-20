import React, {Component} from 'react'
import moment from 'moment';
import GigMap from '../GigMap/GigMap';
import './Gig.scss';

class Gig extends Component {
	render() {
		const {gig} = this.props;

		return (
			<li className="gig__card">
				<h1>{gig.band}</h1>
				<h2>{gig.venue}</h2>
				{/*<GigMap location={gig.location} />*/}
				<p>{moment(gig.date).format("MMM Do YYYY")}</p>
			</li>
		);
	}
}

export default Gig;