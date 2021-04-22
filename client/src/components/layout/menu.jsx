import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import AppContext from '../../context/app/context'
import SpotifyContext from '../../context/spotify/spotifyContext'
import Create from '../../pages/create'

import { MenuIconStyled, CloseIconStyled } from './styled/HeaderStyled'
import { Navbar, NavLink, ResponsiveMenu } from './styled/navigation.styled'

const Menu = () => {
  const { scroll, setScroll } = useContext(AppContext)
  const { location } = useReactRouter()
  const spotifyContext = useContext(SpotifyContext)
  const { authenticated } = spotifyContext
  const [addGigActive, setAddGigActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLocation = location.pathname

  const handleAddGig = e => {
    e.preventDefault()
    setAddGigActive(!addGigActive)
  }

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
    setScroll(!scroll)
  }

  return (
    <>
      {menuOpen ? (
        <CloseIconStyled onClick={handleMenuClick} />
      ) : (
        <MenuIconStyled onClick={handleMenuClick} />
      )}
      <ResponsiveMenu menuOpen={menuOpen}>
        <Navbar>
          {/* Need to make re-usable component for these with paths */}
          <NavLink active={currentLocation === '/gigs/upcoming'}>
            <Link to="/gigs/upcoming">Upcoming gigs</Link>
          </NavLink>
          <NavLink active={currentLocation === '/gigs/past'}>
            <Link to="/gigs/past">Past gigs</Link>
          </NavLink>
          <NavLink>
            <span onClick={e => handleAddGig(e)}>Add gig</span>
          </NavLink>
          {authenticated && (
            <li>
              <Link to="/users/spotify/top-tracks">Most Listened to</Link>
            </li>
          )}
          <Create
            addMode={addGigActive}
            handleCloseClick={e => handleAddGig(e)}
          />
          {/* <Search /> */}
        </Navbar>
      </ResponsiveMenu>
    </>
  )
}

export default Menu
