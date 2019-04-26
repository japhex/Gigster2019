import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/sagas';
import { watchFetchGigs, watchFetchGigsAdditionalDetail } from "./modules/gigs/sagas/gigs";
import { watchCreateGig, watchUpdateGig, watchDeleteGig } from "./modules/gigs/sagas/gigs-model";
import { watchFetchUsers, watchFetchUserByUsername } from "./modules/users/sagas/users";
import { watchFetchArtistSearch, watchFetchVenueSearch, watchFetchEventSearch} from "./modules/gigs/sagas/search";

export default function* rootSaga() {
	yield all([
		watchFetchUsers(),
		watchFetchUserByUsername(),
		watchFetchGigs(),
		watchLogin(),
		watchFetchGigsAdditionalDetail(),
		watchCreateGig(),
		watchUpdateGig(),
		watchDeleteGig(),
		watchFetchArtistSearch(),
		watchFetchVenueSearch(),
		watchFetchEventSearch()
	]);
}