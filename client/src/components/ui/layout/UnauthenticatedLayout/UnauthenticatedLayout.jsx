import { GlobalStyle } from 'AppStyled'
import { UnauthenticatedLayoutContainer } from 'components/ui/layout/UnauthenticatedLayout/UnauthenticatedLayoutStyled'

const UnauthenticatedLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <UnauthenticatedLayoutContainer>{children}</UnauthenticatedLayoutContainer>
  </>
)

export default UnauthenticatedLayout
