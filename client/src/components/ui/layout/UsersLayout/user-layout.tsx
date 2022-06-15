import { GlobalStyle } from 'app.styled'
import Header from 'components/layout/header'
import { UsersLayoutContainer } from 'components/ui/layout/UsersLayout/user-layout.styled'

const UsersLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <UsersLayoutContainer>{children}</UsersLayoutContainer>
  </>
)

export default UsersLayout
