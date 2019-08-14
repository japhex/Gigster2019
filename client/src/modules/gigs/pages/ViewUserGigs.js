import React from 'react'
import { Query } from 'react-apollo'
import {getGigsByUser} from 'api/users/users'
import GigList from '../components/Gig/GigList'
import QueryHandler from 'components/utils/QueryHandler'
import {Div} from '../components/GigStyled/GigsStyled'

const ViewUserGigs = ({user}) => (
	<Query query={getGigsByUser}  variables={{userId:user.id}}>
		{({ loading, error, data }) => {
			if (loading || error) return (<QueryHandler loading={loading} error={error} />)

			const {newGigs, oldGigs} = data.userGigs.gigs;

			return (
				<Div>
					<GigList type="new" title="Upcoming Shows" gigs={newGigs} />
					<GigList type="old" title="Past Shows" gigs={oldGigs} />
				</Div>
			)
		}}
	</Query>
)

export default ViewUserGigs;