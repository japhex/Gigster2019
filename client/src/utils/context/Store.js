import React from 'react'

export const Store = React.createContext();

const initialState = {
	gigs:[],
	users:[],
	activeUser:{}
}

function reducer(state, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			return { ...state, episodes: action.payload };
		default:
			return state;
	}
}

export function StoreProvider(props) {
	return (
		<Store.Provider value='data from store'>
			{props.children}
		</Store.Provider>
	)
}