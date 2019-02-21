import React, {Component} from 'react'
import moment from 'moment';
import './Gig.scss';

class Gig extends Component {
	render() {
		const {gig} = this.props;

		return (
			<li className="gig__card">
				<h1>
					{gig.band} <small>[{moment(gig.date).format("MMM Do YYYY")}]</small>
				</h1>
				<img src={gig.artistInfo.artist.image[4]['#text']} width="300px" />
				<p>{gig.venue}</p>
			</li>
		);
	}
}

export default Gig;