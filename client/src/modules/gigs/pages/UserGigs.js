import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './UserGigs.scss';
import GigList from './../components/GigList/GigList';

const getGigs = gql`
{
  gigs {
    artist
  }
}`;

const UserGigs = () => {
	return (
		<>
			<Query query={getGigs} >
				{({ loading, error, data }) => {
					if (loading) return <p>Loading…</p>;
					if (error) return <p>Error :(</p>;
					return data.gigs.map(({ artist }) => (
						<div key={artist}>
							<p>{artist}</p>
						</div>
					));
				}}
			</Query>
			<div className="gig-list__container">
				<GigList type="new" title="Upcoming Shows" />
				<GigList type="old" title="Past Shows" />
			</div>
		</>
	);
}

export default UserGigs;