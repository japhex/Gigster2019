import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/sagas';
import { watchFetchGigs } from "./modules/gigs/sagas/gigs";

export default function* rootSaga() {
	yield all([
		watchFetchGigs(),
		watchLogin()
	]);
}