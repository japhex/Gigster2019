import React from 'react'

import { Link } from 'react-router-dom'

import Menu from 'components/layout/menu'
import { Header, Logo } from 'components/layout/styled/HeaderStyled'
import { NavGroup } from 'components/layout/styled/navigation.styled'
import UserDetails from 'components/layout/UserDetails'

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
