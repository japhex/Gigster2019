import gql from "graphql-tag";

export const getGigs = gql`
{
  gigs {
    id
    artist
    date
    venue
  }
}`;

export const createGigMutation = gql`
	mutation createGig($artist: String!, $date: Date!, $venue: String!) {
		createGig(artist: $artist, date: $date, venue: $venue) {
			id
			artist
			date
			venue
		}
	}
`;

export const updateGigMutation = gql`
	mutation updateGig($id: ID!, $artist: String!, $date: Date!, $venue: String!) {
		updateGig(id: $id, artist: $artist, date: $date, venue: $venue) {
			id
			artist
			date
			venue
		}
	}
`;

export const deleteGigMutation = gql`
	mutation deleteGig($id: ID!) {
		deleteGig(id: $id) {
			id
			artist
			date
			venue
		}
	}
`;