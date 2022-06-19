import { ApolloProvider } from '@apollo/react-hooks'
import { ChakraProvider } from '@chakra-ui/react'
import AppProviderWrapper from 'context/app/provider'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import { client } from 'utils/apollo'
import history from 'utils/routing'

const App = () => (
  <ChakraProvider>
    <ApolloProvider client={client}>
      <AppProviderWrapper>
        {/* @ts-ignore */}
        <Router history={history}>{routes}</Router>
      </AppProviderWrapper>
    </ApolloProvider>
  </ChakraProvider>
)

export default App
