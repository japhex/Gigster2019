import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './utils/routing'
import UserProviderWrapper from './context/user/userContextProvider'
import SpotifyProviderWrapper from './context/spotify/spotifyContextProvider'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProviderWrapper>
          <SpotifyProviderWrapper>
            <Router history={history}>{routes}</Router>
          </SpotifyProviderWrapper>
        </UserProviderWrapper>
      </ApolloProvider>
    )
  }
}

export default App
