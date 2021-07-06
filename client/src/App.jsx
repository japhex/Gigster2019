import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AppProviderWrapper from 'context/app/provider'
import SpotifyProviderWrapper from 'context/spotify/spotifyContextProvider'
import routes from 'routes'
import { theme } from 'themes/default'
import { client } from 'utils/apollo'
import history from 'utils/routing'

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
