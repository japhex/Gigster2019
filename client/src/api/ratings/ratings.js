import gql from "graphql-tag";

export const rateGigMutation = gql`
	mutation rateGig($id: String!, $rating: Int!) {
		rateGig(id: $id, rating: $rating)
	}
`;