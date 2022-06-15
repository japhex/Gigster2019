import { ApolloProvider } from '@apollo/react-hooks'
import { ChakraProvider } from '@chakra-ui/react'
import { DarkTheme, BaseProvider } from 'baseui'
import AppProviderWrapper from 'context/app/provider'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import { ThemeProvider } from 'styled-components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { theme } from 'themes/default'
import { client } from 'utils/apollo'
import history from 'utils/routing'

const engine = new Styletron()

const App = () => (
  <ChakraProvider>
    <ApolloProvider client={client}>
      {/* @ts-ignore */}
      <StyletronProvider value={engine}>
        <BaseProvider theme={DarkTheme}>
          {/* @ts-ignore */}
          <ThemeProvider theme={theme}>
            <AppProviderWrapper>
              {/* @ts-ignore */}
              <Router history={history}>{routes}</Router>
            </AppProviderWrapper>
          </ThemeProvider>
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  </ChakraProvider>
)

export default App
