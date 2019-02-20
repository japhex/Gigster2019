import React from 'react';
import Header from './components/layout/Header/Header';
import GigList from './modules/gigs/components/GigList/GigList';
import {Provider} from 'react-redux';
import createStore from './store';
import history from './utils/routing';
import './App.scss';
import './utils/axios/interceptor';

const store = createStore(history);

export default () => (
	<Provider store={store}>
		<div className="gigster">
			<Header />
			<div>
				<GigList />
			</div>
		</div>
	</Provider>
);