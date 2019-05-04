import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
import routes from './routes';
import './utils/axios/interceptor';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './utils/redux/store';
import history from './utils/routing';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/api',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

const store = createStore(history);

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						{routes}
					</ConnectedRouter>
				</Provider>
			</ApolloProvider>
		);
	}
}

export default App;