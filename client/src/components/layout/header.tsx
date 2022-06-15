import Menu from 'components/layout/menu'
import { Header, Logo } from 'components/layout/styled/header.styled'
import { NavGroup } from 'components/layout/styled/navigation.styled'
import UserDetails from 'components/layout/user-details'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <Header>
      <NavGroup>
        <Menu />
      </NavGroup>
      <NavGroup>
        <Logo>
          <Link to="/">Gigstr</Link>
        </Logo>
      </NavGroup>
      <NavGroup>
        <UserDetails />
      </NavGroup>
    </Header>
  )
}

export default AppHeader
