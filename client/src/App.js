import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './utils/routing'
import SpotifyProviderWrapper from './context/spotify/spotifyContextProvider'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/default'
import { GlobalStyle } from './AppStyled'

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
        <ThemeProvider theme={theme}>
          <SpotifyProviderWrapper>
            <GlobalStyle />
            <Router history={history}>{routes}</Router>
          </SpotifyProviderWrapper>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
