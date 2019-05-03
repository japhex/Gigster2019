import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './UserGigs.scss';
import withGigs from 'modules/middleware/withGigs';
import GigList from './../components/GigList/GigList';

const getGigs = gql`
{
  gigs {
    artist
  }
}`;

const UserGigs = ({newGigs, oldGigs, gigsStatus, fetchGigs, fetchGigsAdditionalDetail, loadingAdditionalContent, gigId, deleteGig}) => {
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
				<GigList type="new" title="Upcoming Shows" gigs={newGigs} gigsStatus={gigsStatus} loadingAdditionalContent={loadingAdditionalContent} gigId={gigId} fetchGigs={fetchGigs} fetchGigsAdditionalDetail={fetchGigsAdditionalDetail} deleteGig={deleteGig} />
				<GigList type="old" title="Past Shows" gigs={oldGigs} gigsStatus={gigsStatus} loadingAdditionalContent={loadingAdditionalContent} gigId={gigId} fetchGigs={fetchGigs} fetchGigsAdditionalDetail={fetchGigsAdditionalDetail} deleteGig={deleteGig} />
			</div>
		</>
	);
}

export default withGigs(UserGigs);