import { ApolloProvider } from '@apollo/react-hooks'
import { DarkTheme, BaseProvider } from 'baseui'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import AppProviderWrapper from 'context/app/provider'
import SpotifyProviderWrapper from 'context/spotify/spotifyContextProvider'
import routes from 'routes'
import { theme } from 'themes/default'
import { client } from 'utils/apollo'
import history from 'utils/routing'

const engine = new Styletron()

const App = () => (
  <ApolloProvider client={client}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <ThemeProvider theme={theme}>
          <AppProviderWrapper>
            <SpotifyProviderWrapper>
              <Router history={history}>{routes}</Router>
            </SpotifyProviderWrapper>
          </AppProviderWrapper>
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  </ApolloProvider>
)

export default App
