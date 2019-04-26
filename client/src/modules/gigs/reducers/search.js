import { LOCATION_CHANGE } from 'connected-react-router';
import {FETCH_ARTIST_SEARCH_SUCCESS, FETCH_VENUE_SEARCH_SUCCESS, FETCH_EVENT_SEARCH_SUCCESS} from "../actions/search"

const initialState = {
	artists: [],
	venues: [],
	events: []
};
export default function(state = initialState, action) {
	switch(action.type) {
		case LOCATION_CHANGE:
			return {
				...state,
				artists: [],
				venues: []
			};
		case FETCH_ARTIST_SEARCH_SUCCESS:
			return {
				...state,
				artists: JSON.parse(action.artists)
			};
		case FETCH_VENUE_SEARCH_SUCCESS:
			return {
				...state,
				venues: JSON.parse(action.venues)
			};
		case FETCH_EVENT_SEARCH_SUCCESS:
			return {
				...state,
				events: JSON.parse(action.events)
			};
		default:
			return state;
	}
}