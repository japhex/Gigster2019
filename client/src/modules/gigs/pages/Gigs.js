import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './UserGigs.scss';
import GigList from './../components/GigList/GigList';

const getGigs = gql`
{
  gigs {
    id
    artist
    date
    venue
  }
}`;

const UserGigs = () => {
	return (
		<>
			<Query query={getGigs} >
				{({ loading, error, data }) => {
					if (loading) return <p>Loading…</p>;
					if (error) return <p>Error :(</p>;

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