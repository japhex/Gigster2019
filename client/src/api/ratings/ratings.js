import gql from "graphql-tag";

export const rateGigMutation = gql`
	mutation rateGig($id: ID!, $rating: Int!) {
		rateGig(id: $id, rating: $rating)
	}
`;