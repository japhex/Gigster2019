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