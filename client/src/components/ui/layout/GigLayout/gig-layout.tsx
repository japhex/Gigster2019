import { useContext } from 'react'

import { GlobalStyle } from 'app.styled'
import Filters from 'components/layout/gig-filters'
import Header from 'components/layout/header'
import { PageContainer, GigLayoutContainer } from 'components/layout/styled/gig-layout.styled'
import AppContext from 'context/app/context'
import Create from 'pages/create'


const GigLayout = ({ children }) => {
  const { scroll } = useContext(AppContext)

  return (
    <>
      <GlobalStyle scroll={scroll} />
      <Header />
      <Filters />
      <PageContainer>
        <Create />
        <GigLayoutContainer>{children}</GigLayoutContainer>
      </PageContainer>
    </>
  )
}

export default GigLayout
