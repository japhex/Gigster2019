import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/sagas';
import { watchFetchGigs, watchFetchGigsAdditionalDetail } from "./modules/gigs/sagas/gigs";
import { watchCreateGig } from "./modules/gigs/sagas/gigs-model";
import { watchFetchUsers, watchFetchUser } from "./modules/users/sagas/users";

export default function* rootSaga() {
	yield all([
		watchFetchUsers(),
		watchFetchUser(),
		watchFetchGigs(),
		watchLogin(),
		watchFetchGigsAdditionalDetail(),
		watchCreateGig()
	]);
}