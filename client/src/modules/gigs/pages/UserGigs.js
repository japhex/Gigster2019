import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {getGigs} from 'api/gigs/gigs'
import GigList from '../components/Gig/GigList'
import QueryHandler from 'components/utils/QueryHandler'
import {Div} from '../components/GigStyled/GigsStyled'

const UserGigs = () => {
	const { loading, error, data } = useQuery(getGigs)
	if (loading || error) return (<QueryHandler loading={loading} error={error} />)

	const gigs = data.gigs
	const {oldGigs, newGigs} = gigs

	return (
		<Div>
			<GigList type="new" title="Upcoming Shows" gigs={newGigs} />
			<GigList type="old" title="Past Shows" gigs={oldGigs} />
		</Div>
	)
}

export default UserGigs;