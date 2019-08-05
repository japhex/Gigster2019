import gql from "graphql-tag";

export const getGigs = gql`
{
    gigs {
        id
	    songkickId
	    songkickJson
    }
}`;

export const createGigMutation = gql`
	mutation createGig($artist: String!, $date: Date!, $venue: String!) {
		createGig(artist: $artist, date: $date, venue: $venue) {
			id
			songkickId
			songkickJson
		}
	}
`;

export const createSongkickGigMutation = gql`
	mutation createSongkickGig($songkickId: ID!, $songkickJson: JSONObject!) {
		createSongkickGig(songkickId: $songkickId, songkickJson: $songkickJson) {
			id
			songkickId
			songkickJson
		}
	}
`;

export const updateGigMutation = gql`
	mutation updateGig($id: ID!, $artist: String!, $date: Date!, $venue: String!) {
		updateGig(id: $id, artist: $artist, date: $date, venue: $venue) {
			id
			songkickId
			songkickJson
		}
	}
`;

export const deleteGigMutation = gql`
	mutation deleteGig($id: ID!) {
		deleteGig(id: $id) {
			id
			songkickId
			songkickJson
		}
	}
`;

export const searchGigMutation = gql`
	mutation searchGig($artist: String!) {
		searchGig(artist: $artist)
	}
`;