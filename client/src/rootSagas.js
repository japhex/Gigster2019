import { all } from 'redux-saga/effects';
import { watchFetchGigs } from "./modules/gigs/sagas/gigs";

export default function* rootSaga() {
	yield all([
		watchFetchGigs()
	]);
}