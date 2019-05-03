import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import routes from './routes';
import './utils/axios/interceptor';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './utils/redux/store';
import history from './utils/routing';

const localGraphQL = "http://localhost:4000/graphql";
const client = new ApolloClient({uri: localGraphQL});

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