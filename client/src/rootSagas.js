import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/sagas';
import { watchFetchGigs, watchFetchGigsAdditionalDetail } from "./modules/gigs/sagas/gigs";
import { watchCreateGig } from "./modules/gigs/sagas/gigs-model";

export default function* rootSaga() {
	yield all([
		watchFetchGigs(),
		watchLogin(),
		watchFetchGigsAdditionalDetail(),
		watchCreateGig()
	]);
}