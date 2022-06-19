import { Box, Flex } from '@chakra-ui/react'
import Filters from 'components/layout/gig-filters'
import Header from 'components/layout/header'

import Create from 'pages/create'

const GigLayout = ({ children }) => (
  <>
    <Header />
    <Filters />
    <Flex direction="column" p={2} gap={2}>
      <Create />
      <Flex wrap="wrap" justify="space-between">
        {children}
      </Flex>
    </Flex>
  </>
)

export default GigLayout
