import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/sagas';
import { watchFetchGigs, watchFetchGigsAdditionalDetail } from "./modules/gigs/sagas/gigs";
import { watchCreateGig, watchUpdateGig } from "./modules/gigs/sagas/gigs-model";
import { watchFetchUsers, watchFetchUserByUsername } from "./modules/users/sagas/users";

export default function* rootSaga() {
	yield all([
		watchFetchUsers(),
		watchFetchUserByUsername(),
		watchFetchGigs(),
		watchLogin(),
		watchFetchGigsAdditionalDetail(),
		watchCreateGig(),
		watchUpdateGig()
	]);
}