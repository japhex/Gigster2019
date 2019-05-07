import React from 'react'
import { Query } from "react-apollo";
import {getGigs} from "api/gigs/gigs"
import './UserGigs.scss';
import GigList from './../components/GigList/GigList';
import QueryHandler from 'components/utils/QueryHandler'

const UserGigs = () => {
	return (
		<>
			<Query query={getGigs} >
				{({ loading, error, data }) => {
					if (loading || error) return (<QueryHandler loading={loading} error={error} />)

					const gigs = data.gigs;
					const oldGigs = gigs.filter(gig => Date.parse(gig.date) < Date.now());
					const newGigs = gigs.filter(gig => Date.parse(gig.date) > Date.now());

					return (
						<div className="gig-list__container">
							<GigList type="new" title="Upcoming Shows" gigs={newGigs} />
							<GigList type="old" title="Past Shows" gigs={oldGigs} />
						</div>
					)
				}}
			</Query>
		</>
	);
}

export default UserGigs;