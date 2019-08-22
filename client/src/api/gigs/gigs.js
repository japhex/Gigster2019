import gql from "graphql-tag";

export const getGigs = gql`
{
    gigs {
	    oldGigs {
		    id
            songKickGig
        }
	    newGigs {
		    id
            songKickGig
	    }
    }
}`;

export const createGigMutation = gql`
	mutation createGig($artist: String!, $date: Date!, $venue: String!) {
		createGig(artist: $artist, date: $date, venue: $venue) {
			id
            songKickGig
		}
	}
`;

export const createSongkickGigMutation = gql`
	mutation createSongkickGig($songkickId: ID!, $songkickJson: JSONObject!) {
		createSongkickGig(songkickId: $songkickId, songkickJson: $songkickJson) {
            oldGigs {
                id
                songKickGig
            }
            newGigs {
                id
                songKickGig
            }
		}
	}
`;

export const deleteGigMutation = gql`
	mutation deleteGig($id: ID!) {
		deleteGig(id: $id) {
            oldGigs {
                id
                songKickGig
            }
            newGigs {
                id
                songKickGig
            }
		}
	}
`;

export const searchGigMutation = gql`
	mutation searchGig($artist: String!) {
		searchGig(artist: $artist)
	}
`;