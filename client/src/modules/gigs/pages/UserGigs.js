import React from 'react'
import { Query } from 'react-apollo'
import {getGigs} from 'api/gigs/gigs'
import GigList from '../components/Gig/GigList'
import QueryHandler from 'components/utils/QueryHandler'
import {Div} from '../components/GigStyled/GigsStyled'

const UserGigs = () => (
	<Query query={getGigs} >
		{({ loading, error, data }) => {
			if (loading || error) return (<QueryHandler loading={loading} error={error} />)

			const gigs = data.gigs;
			const {oldGigs, newGigs} = gigs

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