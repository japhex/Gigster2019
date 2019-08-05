import React from 'react'
import { Query } from 'react-apollo'
import {getGigsByUser} from 'api/users/users'
import GigList from '../components/Gig/GigList'
import QueryHandler from 'components/utils/QueryHandler'
import {Div} from '../components/GigStyled/GigsStyled'

const UserGigs = ({user}) => (
	<Query query={getGigsByUser}  variables={{userId:parseInt(user.id)}}>
		{({ loading, error, data }) => {
			if (loading || error) return (<QueryHandler loading={loading} error={error} />)

			const gigs = data.userGigs.gigs;
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