import { GlobalStyle } from 'AppStyled'
import Header from 'components/layout/header'
import { UsersLayoutContainer } from 'components/ui/layout/UsersLayout/UsersLayoutStyled'

const UsersLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <UsersLayoutContainer>{children}</UsersLayoutContainer>
  </>
)

export default UsersLayout
