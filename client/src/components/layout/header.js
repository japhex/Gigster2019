import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Logo } from './styled/HeaderStyled'
import UserDetails from './UserDetails'
import Menu from './menu'
import { NavGroup } from './styled/navigation.styled'

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
      {/*<SpotifyUser />*/}
      <NavGroup>
        <UserDetails />
      </NavGroup>
    </Header>
  )
}

export default AppHeader
