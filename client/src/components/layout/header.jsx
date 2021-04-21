import React from 'react'

import { Link } from 'react-router-dom'

import Menu from './menu'
import { Header, Logo } from './styled/HeaderStyled'
import { NavGroup } from './styled/navigation.styled'
import UserDetails from './UserDetails'

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
      {/* <SpotifyUser /> */}
      <NavGroup>
        <UserDetails />
      </NavGroup>
    </Header>
  )
}

export default AppHeader
