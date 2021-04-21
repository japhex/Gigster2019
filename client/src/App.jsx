import React from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AppProviderWrapper from './context/app/provider'
import SpotifyProviderWrapper from './context/spotify/spotifyContextProvider'
import routes from './routes'
import { theme } from './themes/default'
import history from './utils/routing'

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <AppProviderWrapper>
        <SpotifyProviderWrapper>
          <Router history={history}>{routes}</Router>
        </SpotifyProviderWrapper>
      </AppProviderWrapper>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
