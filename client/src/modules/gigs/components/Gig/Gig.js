import React, {Component} from 'react'
import moment from 'moment';
import './Gig.scss';

class Gig extends Component {
	render() {
		const {gig} = this.props;

		return (
			<li className="gig__card">
				<h1>
					{gig.band} <small>{moment(gig.date).format("MMM Do YYYY")}</small>
					<p>[ {gig.venue} ]</p>
				</h1>
				<ul className="gig__tags">
					{gig.artistInfo.artist.tags.tag.map(tag =>
						<li>{tag.name}</li>
					)}
				</ul>
				<img src={gig.artistInfo.artist.image[5]['#text']} />
			</li>
		);
	}
}

export default Gig;