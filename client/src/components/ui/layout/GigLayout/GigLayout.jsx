import { useContext } from 'react'

import { GlobalStyle } from 'AppStyled'
import Filters from 'components/layout/gig-filters'
import Header from 'components/layout/header'
import AppContext from 'context/app/context'
import Create from 'pages/create'

const GigLayout = ({ children }) => {
  const { scroll } = useContext(AppContext)

  return (
    <>
      <GlobalStyle scroll={scroll} />
      <Header />
      <Filters />
      <div style={{ padding: '30px' }}>
        <Create />
        {children}
      </div>
    </>
  )
}

export default GigLayout
