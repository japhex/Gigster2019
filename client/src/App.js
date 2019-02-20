import React, { Component } from 'react';
import routes from './routes';
import './utils/axios/interceptor';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './utils/redux/store';
import history from './utils/routing';

const store = createStore(history);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					{routes}
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;