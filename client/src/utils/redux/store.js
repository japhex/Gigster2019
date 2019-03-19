import throttle from 'lodash/throttle';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger';
import { middleware as flashMiddleware } from 'redux-flash';
import rootReducer from '../../rootReducers';
import rootSaga from '../../rootSagas';

export const STATE_LOCAL_STORAGE_KEY = 'state';

let referenceStore = null;

/**
 * Create store
 */
export default (history, initialState = {}) => {
	const sagaMiddleware = createSagaMiddleware();

	const middleware = [routerMiddleware(history), sagaMiddleware, flashMiddleware()];
	if(process.env.NODE_ENV === 'development') {
		middleware.push(logger);
	}

	const store = createStore(
		rootReducer(history),
		// initialState,
		loadState(),
		compose(
			applyMiddleware(...middleware),
		),
	);

	sagaMiddleware.run(rootSaga);

	store.subscribe(throttle(() => {
		saveState({
			login: store.getState().login,
			gigs: store.getState().gigs,
			users: store.getState().users
		});
	}, 1000));

	referenceStore = store;

	return store;
};

export const getStore = () => referenceStore;

/**
 * Load state from localStorage
 *
 * It’s important that this piece of code is wrapped in a try/catch block because calls to
 * localStorage.getItem can fail if the user privacy mode does not allow the use of localStorage.
 */
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(STATE_LOCAL_STORAGE_KEY);

		if(serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch(err) {
		console.log('Unable to retrieve state from localStorage');
		return undefined;
	}
}

/**
 * Save state to localStorage
 *
 * This will only work if the state is serializable. Having a serializable
 * state is a general recommendation in Redux.
 */
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);

		localStorage.setItem(STATE_LOCAL_STORAGE_KEY, serializedState);
	} catch(err) {
		// ignore write errors
	}
}