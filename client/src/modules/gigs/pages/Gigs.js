import React from 'react'
import { Query } from "react-apollo";
import {getGigs} from "api/gigs/gigs"
import GigList from './../components/GigList/GigList';
import QueryHandler from 'components/utils/QueryHandler'
import {Div} from './GigsStyled'

const UserGigs = () => (
	<Query query={getGigs} >
		{({ loading, error, data }) => {
			if (loading || error) return (<QueryHandler loading={loading} error={error} />)

			const gigs = data.gigs;
			const oldGigs = gigs.filter(gig => Date.parse(gig.date) < Date.now());
			const newGigs = gigs.filter(gig => Date.parse(gig.date) > Date.now());

			return (
				<Div>
					<GigList type="new" title="Upcoming Shows" gigs={newGigs} />
					<GigList type="old" title="Past Shows" gigs={oldGigs} />
				</Div>
			)
		}}
	</Query>
)

export default UserGigs;