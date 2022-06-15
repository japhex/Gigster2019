import { GlobalStyle } from 'app.styled'
import { UnauthenticatedLayoutContainer } from 'components/ui/layout/UnauthenticatedLayout/unauthenticated-layout.styled'

const UnauthenticatedLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <UnauthenticatedLayoutContainer>{children}</UnauthenticatedLayoutContainer>
  </>
)

export default UnauthenticatedLayout
